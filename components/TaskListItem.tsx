import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTasks } from '@/functions/fetchTasks';

export default function TaskListItem({
  title,
  time,
}: {
  title: string;
  time: string;
}) {
  const [checked, setChecked] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateTasks,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
    onError: (error: any) => console.log('Error while updating', error),
  });

  const onEdit = () => {};
  const onDelete = () => {};
  const onComplete = ({ taskId }: { taskId: number }) => {
    mutation.mutate({
      taskId,
      isCompleted: true,
    });
  };

  return (
    <View className='flex-row justify-center border border-gray-300 rounded-full items-center'>
      <View className='pl-5 p-2'>
        {/* Checkmark here */}
        <AntDesign
          name='checkcircle'
          color={checked ? 'green' : 'grey'}
          onPress={onComplete}
          size={24}
        />
      </View>
      <View className='flex-1 items-center'>
        <Text className='font-bold text-xl'>{title}</Text>
        <Text className='text-md'>{time}</Text>
      </View>
      <View className='flex-row gap-3 p-4'>
        {/* Edit and Delete buttons */}
        <AntDesign name='edit' size={24} color={'blue'} onPress={onEdit} />
        <AntDesign name='delete' size={24} color={'red'} onPress={onDelete} />
      </View>
    </View>
  );
}
