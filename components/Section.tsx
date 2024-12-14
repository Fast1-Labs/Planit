import { View } from 'react-native';
import SectionItem from './SectionItem';

export default function Section() {
  return (
    <View className='flex-1 gap-3'>
      <View className='flex-row flex-wrap justify-evenly'>
        <SectionItem title='Project' count='5' backgroundColor='#B4C4FF' />
        <SectionItem title='Work' count='5' backgroundColor='#CFF3E9' />
      </View>
      <View className='flex-row justify-evenly'>
        <SectionItem title='Daily Tasks' count='5' backgroundColor='#9747FF' />
        <SectionItem title='Groceries' count='5' backgroundColor='#EDBE7D' />
      </View>
    </View>
  );
}
