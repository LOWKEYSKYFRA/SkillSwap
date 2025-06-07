import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';
import ToastService from './src/services/ToastService';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  try {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
              <AppNavigator />          
          </NavigationContainer>
          <ToastService />
        </AuthProvider>
      </SafeAreaProvider>
    );
  } catch (error) {
    console.log('Error initializing app:', error);
    return <SplashScreen />;
  }
}