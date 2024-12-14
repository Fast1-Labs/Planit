import { View, Text } from 'react-native';

export default function TaskListItem() {
  return (
    <View className='flex-1'>
      {/* Checkmark here */}
      <View className='flex-row'>
        <Text>Email to Anıl</Text>
        <Text>8AM to 12PM</Text>
      </View>
    </View>
  );
}
