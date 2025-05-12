import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const featuredSkills = [
    { id: 1, title: 'Web Development', users: 120 },
    { id: 2, title: 'Digital Marketing', users: 85 },
    { id: 3, title: 'Graphic Design', users: 200 },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to SkillSwap</Text>
        <TouchableOpacity onPress={() => router.push('/notifications')}>
          <MaterialCommunityIcons name="bell" size={24} color="#007aff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity 
          style={styles.searchBar}
          onPress={() => router.push('/search')}
        >
          <MaterialCommunityIcons name="magnify" size={24} color="#666" />
          <Text style={styles.searchText}>Search skills or users...</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Skills</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredSkills.map(skill => (
            <TouchableOpacity 
              key={skill.id}
              style={styles.skillCard}
              onPress={() => router.push(`/skills/${skill.id}`)}
            >
              <Text style={styles.skillTitle}>{skill.title}</Text>
              <Text style={styles.skillUsers}>{skill.users} users</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg' }}
            style={styles.activityImage}
          />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>New Web Development Session</Text>
            <Text style={styles.activityDescription}>
              Join the upcoming session on React fundamentals
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    padding: 20,
    paddingTop: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 12,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  skillCard: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    borderRadius: 12,
    marginRight: 15,
    width: 150,
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  skillUsers: {
    fontSize: 14,
    color: '#666',
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  activityImage: {
    width: '100%',
    height: 150,
  },
  activityContent: {
    padding: 15,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
  },
});