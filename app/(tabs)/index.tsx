import Section from '@/components/Section';
import TasksList from '@/components/TasksList';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-slate-100'>
      <SafeAreaView className='flex-1'>
        <View className='p-2 pb-10 flex-row'>
          <Text className='text-2xl font-bold pl-5 flex-1'>
            Lets start with your task!
          </Text>
          <Link asChild href={'/(tabs)/profile'}>
            <AntDesign className='pr-2' name='user' size={24} color={'black'} />
          </Link>
        </View>
        <View className='flex-row'>
          {/* Task Headers Section */}
          <Section />
        </View>
        <Text className='pl-5 text-xl font-semibold pt-10 p-2'>
          Today's Tasks
        </Text>
        <View className='flex-1 p-4'>
          {/* Task List Section */}
          <TasksList />
        </View>
        <View className='items-center p-3'>
          {/* Create Task Button */}
          <Link asChild href={'/(tabs)/create'}>
            <Pressable className='bg-purple-600 p-4 rounded-lg w-full'>
              <Text className='text-white font-semibold text-center text-xl'>
                Create Task
              </Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
}
