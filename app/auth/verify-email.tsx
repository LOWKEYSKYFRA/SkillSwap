// app/auth/verify-email.tsx
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { auth } from "../../firebase/config";
import { sendEmailVerification } from "firebase/auth";

export default function VerifyEmailScreen() {
  const [sent, setSent] = useState(false);
  const user = auth.currentUser;

  const handleResend = async () => {
    if (!user) {
      return Alert.alert("Error", "No user is logged in.");
    }

    try {
      await sendEmailVerification(user);
      setSent(true);
      Alert.alert("Email Sent", "Another verification email has been sent.");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verify Your Email</Text>
      <Text style={styles.info}>
        A verification link has been sent to your email. Please check your inbox
        and click the link to verify your account.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleResend}>
        <Text style={styles.buttonText}>
          {sent ? "Resent Verification Email" : "Resend Email"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 80,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

