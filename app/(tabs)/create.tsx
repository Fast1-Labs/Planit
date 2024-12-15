import { createTasks } from '@/functions/fetchTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Alert, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Create() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTasks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      setTitle('');
      setDescription('');
      setDueDate('');
      setStatus('');
    },
    onError: (error: any) => {
      console.log('Error creating task', error);
    },
  });

  const handleCreate = () => {
    if (title && dueDate && status) {
      mutation.mutate({ title, description, status, dueDate });
    } else {
      Alert.alert('Please fill in all fields that are required!');
    }
  };

  return (
    <View className='bg-slate-300 flex-1'>
      <SafeAreaView>
        <Text className='text-bold text-2xl text-center'>Create Task</Text>
      </SafeAreaView>
    </View>
  );
}
