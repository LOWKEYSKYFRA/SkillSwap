import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Set to true if you want headers on login/signup screens
        animation: "fade", // Optional: makes screen transitions smoother
      }}
    />
  );
}
