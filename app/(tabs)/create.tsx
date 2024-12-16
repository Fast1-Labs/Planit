import DateTimeSection from '@/components/DateTimeSection';
import { createTasks } from '@/functions/fetchTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import {
  Alert,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Create() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [status, setStatus] = useState<string>('');

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTasks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      setTitle('');
      setDescription('');
      setStatus('');
    },
    onError: (error: any) => {
      console.log('Error creating task', error);
    },
  });

  const handleCreate = () => {
    if (title && dueDate && startTime && endTime) {
      mutation.mutate({
        title,
        description,
        status,
        dueDate: dueDate.toISOString(),
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      });
    } else {
      Alert.alert('Please fill in all required fields!');
    }
  };

  return (
    <View className='bg-slate-200 flex-1'>
      <SafeAreaView className='flex-1'>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className='font-bold text-2xl text-center'>Create Task</Text>
          <View>
            <Text className='font-semibold text-2xl pl-4 pt-4'>Task Title</Text>
            <TextInput
              className='border border-gray-300 p-3 m-4 rounded-xl'
              value={title}
              onChangeText={setTitle}
              placeholder='Title'
              maxLength={50}
            />
          </View>

          {/* Date & Time Section */}
          <View className='p-4'>
            <DateTimeSection
              onDateTimeChange={({ date, startTime, endTime }) => {
                setDueDate(date);
                setStartTime(startTime);
                setEndTime(endTime);
              }}
            />
          </View>

          <View>
            <Text className='pl-4 pt-2 font-semibold text-xl'>Description</Text>
            <TextInput
              placeholder='Description'
              value={description}
              onChangeText={setDescription}
              className='border border-gray-300 p-3 m-2 rounded-xl'
              maxLength={150}
              multiline
            />
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
