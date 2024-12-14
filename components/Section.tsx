import { View, Text } from 'react-native';

export default function Section({
  title,
  count,
}: {
  title: string;
  count: string;
}) {
  return (
    <View className='border rounded-full border-gray-400 flex-row'>
      <Text>{title}</Text>
      <Text>{count}</Text>
    </View>
  );
}
