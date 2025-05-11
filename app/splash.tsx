import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const checkFirstTimeUser = async () => {
      const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");

      setTimeout(() => {
        if (hasSeenOnboarding === "true") {
          router.replace("/welcome");
        } else {
          router.replace("/onboarding");
        }
      }, 2000); // simulate loading
    };

    checkFirstTimeUser();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splash.png")} // your app logo here
        style={styles.logo}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" color="#007aff" style={{ marginTop: 20 }} />
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
  logo: {
    width: 200,
    height: 200,
  },
});

