import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading
    const timeout = setTimeout(() => {
      // later we’ll check auth status here
      router.replace("/splash");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007aff" />
      <Text style={styles.text}>Loading SkillSwap...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
});
