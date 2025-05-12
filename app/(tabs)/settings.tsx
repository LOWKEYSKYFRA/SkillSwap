import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { auth } from '../../firebase/config';

export default function SettingsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace('/auth/login');
    } catch (error) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  const SettingItem = ({ icon, title, onPress, value, isSwitch }) => (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      disabled={isSwitch}
    >
      <View style={styles.settingLeft}>
        <MaterialCommunityIcons name={icon} size={24} color="#007aff" />
        <Text style={styles.settingText}>{title}</Text>
      </View>
      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onPress}
          trackColor={{ false: '#767577', true: '#007aff' }}
        />
      ) : (
        <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.section}>
        <SettingItem
          icon="account"
          title="Edit Profile"
          onPress={() => router.push('/profile/edit')}
        />
        <SettingItem
          icon="shield-lock"
          title="Privacy"
          onPress={() => router.push('/settings/privacy')}
        />
        <SettingItem
          icon="bell"
          title="Notifications"
          value={notifications}
          onPress={() => setNotifications(!notifications)}
          isSwitch
        />
      </View>

      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.section}>
        <SettingItem
          icon="theme-light-dark"
          title="Dark Mode"
          value={darkMode}
          onPress={() => setDarkMode(!darkMode)}
          isSwitch
        />
        <SettingItem
          icon="translate"
          title="Language"
          onPress={() => router.push('/settings/language')}
        />
      </View>

      <Text style={styles.sectionTitle}>Support</Text>
      <View style={styles.section}>
        <SettingItem
          icon="help-circle"
          title="Help Center"
          onPress={() => router.push('/settings/help')}
        />
        <SettingItem
          icon="information"
          title="About"
          onPress={() => router.push('/settings/about')}
        />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  logoutButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#ff3b30',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});