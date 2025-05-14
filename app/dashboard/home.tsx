import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useRouter } from "expo-router";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";
import {
  Avatar,
  Text,
  Card,
  Title,
  Paragraph,
  useTheme,
  Button,
  Switch,
  ActivityIndicator,
} from "react-native-paper";
import Toast from "react-native-toast-message";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import moment from "moment";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const colorScheme = useColorScheme();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        fetchQuote();
      } else {
        router.replace("/welcome");
      }
    });
    return unsubscribe;
  }, []);

  const fetchQuote = async () => {
    try {
      const res = await axios.get("https://zenquotes.io/api/random");
      setQuote(res.data[0].q + " — " + res.data[0].a);
    } catch (err) {
      setQuote("Stay motivated. Your skills can change the world!");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Toast.show({
        type: "success",
        text1: "Logged out",
        text2: "See you soon!",
      });
      router.replace("/welcome");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Logout failed",
        text2: "Something went wrong",
      });
    }
  };

  const displayName = user?.displayName || "SkillSwapper";
  const photoURL = user?.photoURL || "https://i.pravatar.cc/100";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar.Image size={64} source={{ uri: photoURL }} />
        <View style={{ marginLeft: 16 }}>
          <Text variant="titleLarge">Hey, {displayName} 👋</Text>
          <Text variant="bodyMedium" style={{ color: theme.colors.secondary }}>
            Today is {moment().format("dddd, MMM Do")}
          </Text>
        </View>
      </View>

      {/* Quote */}
      <Card style={styles.quoteCard}>
        <Card.Content>
          {loading ? (
            <ActivityIndicator animating={true} color={theme.colors.primary} />
          ) : (
            <>
              <Title>Motivation</Title>
              <Paragraph>{quote}</Paragraph>
            </>
          )}
        </Card.Content>
      </Card>

      {/* Feature Cards */}
      <View style={styles.cardRow}>
        <FeatureCard
          icon="compass-outline"
          title="Explore"
          description="Find skills offered by others"
          color="#3b82f6"
          onPress={() => router.push("/dashboard/explore")}
        />
        <FeatureCard
          icon="plus-circle-outline"
          title="Offer Skill"
          description="Post your own skill"
          color="#10b981"
          onPress={() => router.push("/dashboard/post")}
        />
        <FeatureCard
          icon="logout"
          title="Logout"
          description="Leave SkillSwap"
          color="#ef4444"
          onPress={handleLogout}
        />
      </View>

      {/* Toast */}
      <Toast />
    </ScrollView>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
  color,
  onPress,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{ flex: 1 }}>
      <Card style={[styles.featureCard, { backgroundColor: color }]}>
        <Card.Content>
          <Ionicons name={icon as any} size={28} color="white" />
          <Title style={styles.cardTitle}>{title}</Title>
          <Paragraph style={styles.cardDesc}>{description}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f3f4f6",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quoteCard: {
    marginBottom: 20,
    borderRadius: 12,
  },
  cardRow: {
    flexDirection: "column",
    gap: 16,
  },
  featureCard: {
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 16,
  },
  cardTitle: {
    color: "#fff",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDesc: {
    color: "#e0f2fe",
    fontSize: 13,
  },
});
