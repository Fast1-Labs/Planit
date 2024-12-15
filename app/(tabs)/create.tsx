import { createTasks } from '@/functions/fetchTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Alert, View, Text, Pressable, TextInput } from 'react-native';
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
    <View className='bg-slate-200 flex-1'>
      <SafeAreaView>
        <Text className='text-bold text-2xl text-center'>Create Task</Text>
        <View>
          <Text className='font-semibold text-2xl pl-4 pt-4'>Task Title</Text>
          <TextInput
            className='border border-gray-400 p-3 m-4'
            value={title}
            onChangeText={setTitle}
            placeholder='Title'
          />
        </View>
        <View className='pt-2 p-2'>
          <Text className='font-semibold text-xl pl-2'>Category</Text>
          <View className='flex-row p-2 justify-around gap-1'>
            <Pressable className={`bg-purple-600 p-4 rounded-xl w-1/3`}>
              <Text className='text-white font-semibold text-center'>
                Daily
              </Text>
            </Pressable>
            <Pressable className={`bg-purple-400 p-4 rounded-xl w-1/3`}>
              <Text className='font-semibold text-white text-center'>Work</Text>
            </Pressable>
            <Pressable className={`bg-purple-400 p-4 rounded-xl w-1/3`}>
              <Text className='font-semibold text-white text-center'>
                Groceries
              </Text>
            </Pressable>
          </View>
        </View>
        <View className='items-center p-3'>
          <Pressable
            className='bg-purple-600 p-4 rounded-lg w-full'
            onPress={handleCreate}
          >
            <Text className='text-white font-semibold text-center text-xl'>
              Create Task
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
