// app/dashboard/_layout.tsx
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import React from 'react';

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#3b82f6' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerTintColor: '#fff',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          elevation: 5,
          backgroundColor: '#fff',
          borderRadius: 20,
          height: 60,
          paddingBottom: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="home-filled"
              size={focused ? 28 : 24}
              color={focused ? '#3b82f6' : '#999'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="travel-explore"
              size={focused ? 28 : 24}
              color={focused ? '#3b82f6' : '#999'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 55,
                height: 55,
                borderRadius: 30,
                backgroundColor: '#3b82f6',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            >
              <MaterialIcons name="add" size={28} color="#fff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="chat-bubble"
              size={focused ? 28 : 24}
              color={focused ? '#3b82f6' : '#999'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="settings"
              size={focused ? 28 : 24}
              color={focused ? '#3b82f6' : '#999'}
            />
          ),
        }}
      />
    </Tabs>
  );
}
