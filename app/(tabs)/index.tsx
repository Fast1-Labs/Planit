import Section from '@/components/Section';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='p-2 pb-10'>
        <Text className='text-2xl font-bold pl-5'>Today's Tasks</Text>
      </View>
      <View className='gap-5'>
        {/* Task Headers Section */}
        <View className='flex-row justify-evenly'>
          <View className='flex-row gap-3 border border-gray-400 w-2/5 justify-center bg-[#B4C4FF] p-5'>
            <Text className='font-bold text-xl'>Project</Text>
            <Text className='font-bold text-xl'>5</Text>
          </View>
          <View className='flex-row gap-3 border border-gray-400 w-2/5 justify-center bg-[#CFF3E9] p-5'>
            <Text className='font-bold text-xl'>Project</Text>
            <Text className='font-bold text-xl'>5</Text>
          </View>
        </View>
        <View className='flex-row justify-evenly'>
          <View className='flex-row gap-3 border border-gray-400 w-2/5 justify-center bg-[#9747FF] p-5'>
            <Text className='font-bold text-xl'>Project</Text>
            <Text className='font-bold text-xl'>5</Text>
          </View>
          <View className='flex-row gap-3 border border-gray-400 w-2/5 justify-center bg-[#EDBE7D] p-5'>
            <Text className='font-bold text-xl'>Project</Text>
            <Text className='font-bold text-xl'>5</Text>
          </View>
        </View>
      </View>
      <View>{/* Task List Section */}</View>
      <View>{/* Create Task Button */}</View>
    </SafeAreaView>
  );
}
