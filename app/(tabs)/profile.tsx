import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { auth, db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export default function ProfileScreen() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          router.replace('/auth/login');
          return;
        }

        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        Alert.alert('Error', 'Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' }}
          style={styles.coverImage}
        />
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{userData?.fullName || 'User'}</Text>
          <Text style={styles.bio}>Passionate about learning and sharing knowledge</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Skills</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>48</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>156</Text>
          <Text style={styles.statLabel}>Connections</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <View style={styles.skillsList}>
          <TouchableOpacity style={styles.skillItem}>
            <MaterialCommunityIcons name="code-tags" size={24} color="#007aff" />
            <Text style={styles.skillText}>Web Development</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skillItem}>
            <MaterialCommunityIcons name="palette" size={24} color="#007aff" />
            <Text style={styles.skillText}>UI Design</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.editButton}
        onPress={() => router.push('/profile/edit')}
      >
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007aff',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  skillsList: {
    gap: 10,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
  },
  skillText: {
    marginLeft: 10,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#007aff',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});