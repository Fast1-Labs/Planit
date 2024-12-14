import { Redirect, Stack } from 'expo-router';
import 'react-native-reanimated';
import '../global.css';
import AuthContextProvider, { useAuth } from '@/context/AuthContext';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/utils/queryClient';

export default function RootLayoutNav() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
