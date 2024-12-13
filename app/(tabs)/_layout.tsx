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
      <Stack.Screen
        name='index'
        options={{
          title: 'Tab One',
        }}
      />
      <Stack.Screen
        name='two'
        options={{
          title: 'Tab Two',
        }}
      />
    </Stack>
  );
}
