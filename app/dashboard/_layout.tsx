// app/dashboard/_layout.tsx
import { Stack } from "expo-router";
import React from "react";

export default function DashboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // You can enable this if you want default headers
      }}
    />
  );
}
