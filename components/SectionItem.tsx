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
      className={`bg-['${backgroundColor}'] flex-1 p-2`}
      //@ts-ignore
      backgroundColor={backgroundColor}
    >
      <View className='flex-row p-2'>
        <Text className='font-bold text-lg flex-1'>{title}</Text>
        <Text className='font-bold text-lg'>{count}</Text>
      </View>
    </View>
  );
}
