import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/SkillSwap.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to SkillSwap</Text>
      <Text style={styles.subtitle}>Post. Solve. Grow.</Text>
      <Text style={styles.description}>
        Exchange your skills and solve real-world problems with others like you.
      </Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => router.push("/auth/signup")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => router.push("/auth/login")}
      >
        <Text style={styles.buttonTextSecondary}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#007aff",
    marginTop: 6,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonPrimary: {
    backgroundColor: "#007aff",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
    elevation: 2,
  },
  buttonSecondary: {
    borderColor: "#007aff",
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#007aff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
