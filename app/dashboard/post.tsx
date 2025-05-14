// app/dashboard/post.tsx
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Post() {
  const [skill, setSkill] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handlePost = () => {
    if (!skill || !description) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }
    Alert.alert("Success", `Your "${skill}" post has been created.`);
    setSkill("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offer a Skill</Text>
      <TextInput
        style={styles.input}
        placeholder="Skill title"
        value={skill}
        onChangeText={setSkill}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handlePost}>
        <Ionicons name="checkmark-circle" size={24} color="#fff" />
        <Text style={styles.buttonText}>Post Skill</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderColor: "#d1d5db",
    borderWidth: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#10b981",
    padding: 15,
    borderRadius: 12,
    justifyContent: "center",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
