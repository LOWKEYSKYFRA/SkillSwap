// app/dashboard/messages.tsx
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const mockMessages = [
  { id: "1", from: "Alice", message: "Hey! Can we swap photography skills?" },
  { id: "2", from: "Bob", message: "I’m interested in your coding help." },
];

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Messages</Text>
      <FlatList
        data={mockMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageCard}>
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="#10b981" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.messageFrom}>{item.from}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  messageCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  messageFrom: {
    fontWeight: "600",
    fontSize: 16,
  },
  messageText: {
    fontSize: 14,
    color: "#6b7280",
  },
});
