import { Redirect, Stack } from 'expo-router';
import 'react-native-reanimated';
import '../global.css';
import AuthContextProvider, { useAuth } from '@/context/AuthContext';

export default function RootLayoutNav() {
  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      </Stack>
    </AuthContextProvider>
  );
}
