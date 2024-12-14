import { View, Text } from 'react-native';

export default function SectionItem({
  title,
  count,
  backgroundColor,
}: {
  title: string;
  count: string;
  backgroundColor: string;
}) {
  return (
    <View
      className='border border-gray-400 w-2/5 p-5'
      //@ts-ignore
      backgroundColor={backgroundColor}
      style={{ backgroundColor }}
    >
      <View className='flex-row justify-between'>
        <Text className='font-bold text-lg'>{title}</Text>
        <Text className='font-bold text-lg'>{count}</Text>
      </View>
    </View>
  );
}
