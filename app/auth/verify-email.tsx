import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function EmailVerification() {
  const router = useRouter();

  const handleCheckVerification = () => {
    // 🔥 Firebase check will be added later
    Alert.alert("Still Pending", "Please check your email and click the verification link.");
  };

  const handleResendEmail = () => {
    // 🔥 Firebase resend function will go here
    Alert.alert("Verification Email Sent", "Please check your inbox.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.subtitle}>
        A verification link has been sent to your email. Please verify your email address to continue.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleCheckVerification}>
        <Text style={styles.buttonText}>I’ve Verified</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResendEmail}>
        <Text style={styles.link}>Resend Verification Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007aff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "#007aff",
    fontSize: 16,
    textAlign: "center",
  },
});
