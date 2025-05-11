import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    title: "Welcome to SkillSwap",
    description: "Exchange skills and learn from others around the world.",
    image: require("../../assets/images/onboarding1.png"),
  },
  {
    title: "Teach What You Know",
    description: "Share your expertise and help others grow.",
    image: require("../../assets/images/onboarding2.png"),
  },
  {
    title: "Learn New Skills",
    description: "Discover new talents and improve your abilities.",
    image: require("../../assets/images/onboarding3.png"),
  },
];

export default function Onboarding() {
  const router = useRouter();

  const handleDone = () => {
    router.replace("/welcome");
  };

  return (
    <Swiper loop={false} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      {slides.map((slide, index) => (
        <View style={styles.slide} key={index}>
          <Image source={slide.image} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
          {index === slides.length - 1 && (
            <TouchableOpacity style={styles.button} onPress={handleDone}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007aff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#007aff",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

