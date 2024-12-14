import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function TaskListItem({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <View className='flex-row justify-center border border-gray-400 rounded-full items-center'>
      <View className='pl-5 p-2'>
        {/* Checkmark here */}
        <AntDesign
          name='checkcircle'
          color={checked ? 'green' : 'grey'}
          onPress={() => setChecked(!checked)}
          size={24}
        />
      </View>
      <View className='flex-1 items-center'>
        <Text className='font-bold text-xl'>{title}</Text>
        <Text className='text-md'>{time}</Text>
      </View>
      <View className='flex-row gap-3 p-4'>
        {/* Edit and Delete buttons */}
        <AntDesign name='edit' size={24} color={'blue'} />
        <AntDesign name='delete' size={24} color={'red'} />
      </View>
    </View>
  );
}
