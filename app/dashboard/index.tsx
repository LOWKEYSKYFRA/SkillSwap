// app/dashboard/index.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.replace("/welcome");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      router.replace("/welcome");
    } catch (error) {
      Alert.alert("Logout Error", "Something went wrong during logout.");
    }
  };

  const displayName = user?.displayName || "User";
  const photoURL = user?.photoURL || "https://i.pravatar.cc/100";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: photoURL }} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hello, {displayName} 👋</Text>
          <Text style={styles.subheading}>Welcome to your Dashboard</Text>
        </View>
      </View>

      {/* Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={[styles.card, styles.logoutCard]}
          onPress={handleLogout}
        >
          <View style={styles.cardIconContainer}>
            <MaterialIcons name="logout" size={24} color="#ef4444" />
          </View>
          <Text style={styles.cardTitle}>Logout</Text>
          <Text style={styles.cardText}>Sign out of your account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
  },
  subheading: {
    fontSize: 14,
    color: "#6b7280",
  },
  cardContainer: {
    gap: 20,
  },
  card: {
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardIconContainer: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logoutCard: {
    backgroundColor: "#fef2f2",
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: "#4b5563",
  },
});
