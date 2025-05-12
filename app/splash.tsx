import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate logo fade-in
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Check if user has completed onboarding
    const checkUserStatus = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");

        setTimeout(() => {
          if (hasSeenOnboarding === "true") {
            router.replace("/welcome");
          } else {
            router.replace("/welcome");
          }
        }, 1800); // keep a smooth delay to enjoy splash
      } catch (error) {
        console.error("AsyncStorage error:", error);
        Alert.alert("Oops!", "Something went wrong. Please try again.");
      }
    };

    checkUserStatus();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/splash.png")}
        style={[styles.logo, { opacity: logoOpacity }]}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#007aff" style={{ marginTop: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 220,
    height: 220,
  },
});
