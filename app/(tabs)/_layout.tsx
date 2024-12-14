import { useAuth } from '@/context/AuthContext';
import { Redirect, Stack } from 'expo-router';

export default function TabLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href={'/(auth)'} />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='profile' />
      <Stack.Screen name='create' />
    </Stack>
  );
}
