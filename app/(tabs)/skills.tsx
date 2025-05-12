import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SkillsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Technology', icon: 'laptop' },
    { id: 2, name: 'Design', icon: 'palette' },
    { id: 3, name: 'Business', icon: 'briefcase' },
    { id: 4, name: 'Language', icon: 'translate' },
  ];

  const popularSkills = [
    {
      id: 1,
      title: 'Web Development',
      instructor: 'John Doe',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      instructor: 'Jane Smith',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
      rating: 4.9,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Skills</Text>
        <TouchableOpacity onPress={() => router.push('/skills/create')}>
          <MaterialCommunityIcons name="plus-circle" size={24} color="#007aff" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search skills..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => router.push(`/skills/category/${category.id}`)}
            >
              <MaterialCommunityIcons name={category.icon} size={24} color="#007aff" />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.popularSection}>
        <Text style={styles.sectionTitle}>Popular Skills</Text>
        {popularSkills.map(skill => (
          <TouchableOpacity
            key={skill.id}
            style={styles.skillCard}
            onPress={() => router.push(`/skills/${skill.id}`)}
          >
            <Image source={{ uri: skill.image }} style={styles.skillImage} />
            <View style={styles.skillInfo}>
              <Text style={styles.skillTitle}>{skill.title}</Text>
              <Text style={styles.instructorName}>by {skill.instructor}</Text>
              <View style={styles.ratingContainer}>
                <MaterialCommunityIcons name="star" size={16} color="#ffd700" />
                <Text style={styles.rating}>{skill.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 20,
    padding: 10,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoryCard: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 12,
    marginRight: 15,
    alignItems: 'center',
    width: 100,
  },
  categoryName: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  popularSection: {
    padding: 20,
  },
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  skillImage: {
    width: '100%',
    height: 150,
  },
  skillInfo: {
    padding: 15,
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  instructorName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
  },
});