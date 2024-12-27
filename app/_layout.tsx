import { Stack } from 'expo-router';
import '../global.css';
import AuthContextProvider from '@/context/AuthContext';
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
