import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';

export default function Background({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={['#C8B6FF', '#FFBA08', '#EE9B00', '#9D4EDD']}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
