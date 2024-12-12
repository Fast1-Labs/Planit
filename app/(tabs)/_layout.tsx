import { Stack } from 'expo-router';

export default function TabLayout() {
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
