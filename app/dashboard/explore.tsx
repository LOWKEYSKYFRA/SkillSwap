import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  Card,
  Text,
  Chip,
  Avatar,
  useTheme,
  IconButton,
} from "react-native-paper";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const mockPosts = [
  {
    id: "1",
    title: "🎸 Guitar Lessons",
    description: "Learn to play acoustic and electric guitar.",
    tags: ["music", "instrument", "beginner"],
  },
  {
    id: "2",
    title: "🗣️ Spanish Tutoring",
    description: "Practice conversation and grammar basics.",
    tags: ["language", "spanish", "intermediate"],
  },
  {
    id: "3",
    title: "💻 Web Design",
    description: "Intro to HTML, CSS, and responsive layouts.",
    tags: ["tech", "web", "design"],
  },
];

const categories = ["All", "Music", "Tech", "Language"];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);
  const theme = useTheme();

  const filteredPosts = mockPosts.filter((post) => {
    const matchTitle = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || post.tags.includes(selectedCategory.toLowerCase());
    return matchTitle && matchCategory;
  });

  const toggleSave = (id: string) => {
    const alreadySaved = saved.includes(id);
    setSaved((prev) => (alreadySaved ? prev.filter((sid) => sid !== id) : [...prev, id]));

    Toast.show({
      type: alreadySaved ? "info" : "success",
      text1: alreadySaved ? "Removed from saved" : "Saved skill",
      text2: alreadySaved ? "You unsaved a post." : "You can access this later.",
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          🔍 Explore Skills
        </Text>

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#6b7280" />
          <TextInput
            placeholder="Search skills..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.input}
          />
        </View>

        {/* Category Filters */}
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <Chip
              mode={selectedCategory === item ? "flat" : "outlined"}
              style={{ marginRight: 10 }}
              selected={selectedCategory === item}
              onPress={() => setSelectedCategory(item)}
            >
              {item}
            </Chip>
          )}
        />

        {/* Skill Cards */}
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => (
            <Card style={styles.card} mode="elevated">
              <Card.Title
                title={item.title}
                subtitle={item.description}
                left={(props) => <Avatar.Icon {...props} icon="account" />}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon={saved.includes(item.id) ? "bookmark" : "bookmark-outline"}
                    iconColor={saved.includes(item.id) ? theme.colors.primary : "#9ca3af"}
                    onPress={() => toggleSave(item.id)}
                  />
                )}
              />
              <Card.Content>
                <View style={styles.tagContainer}>
                  {item.tags.map((tag) => (
                    <Chip key={tag} compact style={styles.tag}>
                      {tag}
                    </Chip>
                  ))}
                </View>
              </Card.Content>
            </Card>
          )}
        />

        <Toast />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f5f9",
    flex: 1,
  },
  title: {
    marginBottom: 12,
    fontWeight: "bold",
  },
  searchContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#e5e7eb",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    gap: 6,
  },
  tag: {
    backgroundColor: "#e0f2fe",
    marginRight: 6,
  },
});
