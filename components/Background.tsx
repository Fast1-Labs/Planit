import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';
import { Dimensions } from 'react-native';

export default function Background({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={['#C8B6FF', '#FFBA08', '#EE9B00', '#9D4EDD']}
      style={{ height: Dimensions.get('window').height, flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
}
