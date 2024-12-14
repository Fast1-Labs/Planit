import Section from '@/components/Section';
import TaskListItem from '@/components/TaskListItem';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const createTask = () => {};
  return (
    <View className='flex-1 bg-slate-100'>
      <SafeAreaView className='flex-1'>
        <View className='p-2 pb-10'>
          <Text className='text-2xl font-bold pl-5'>
            Lets start with your task!
          </Text>
        </View>
        {/* Task Headers Section */}
        <View className='flex-row'>
          <Section />
        </View>
        <Text className='pl-5 text-xl font-semibold pt-10 p-2'>
          Today's Tasks
        </Text>
        <View className='flex-1 p-4'>
          {/* Task List Section */}
          <TaskListItem title='Email to Anıl' time='8.00AM to 12.00PM' />
        </View>
        <View className='items-center p-3'>
          {/* Create Task Button */}
          <Pressable
            className='bg-purple-600 p-4 rounded-lg w-full'
            onPress={createTask}
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
