import Section from '@/components/Section';
import TaskListItem from '@/components/TaskListItem';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
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
      <View>{/* Create Task Button */}</View>
    </SafeAreaView>
  );
}
