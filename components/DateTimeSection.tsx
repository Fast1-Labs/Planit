import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

type DateTimeSectionProps = {
  onDateTimeChange: (data: { dueDate: Date; dueTime: Date }) => void;
};

export default function DateTimeSection({
  onDateTimeChange,
}: DateTimeSectionProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const updateParent = (newDate: Date, newTime: Date) => {
    onDateTimeChange({
      dueDate: newDate,
      dueTime: newTime,
    });
  };

  return (
    <View className='gap-2'>
      {/* Date */}
      <Text className='text-xl font-bold mb-2'>Date & Time</Text>

      {/* Date Picker */}
      <Pressable
        className='border border-gray-300 rounded-lg flex-row items-center p-3'
        onPress={() => setShowDatePicker(true)}
      >
        <Text className='flex-1 text-base'>
          {selectedDate.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            weekday: 'long',
          })}
        </Text>
        <AntDesign name='calendar' size={20} color='purple' />
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode='date'
          display='default'
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) {
              setSelectedDate(date);
              updateParent(date, selectedTime);
            }
          }}
        />
      )}

      {/* Time Picker */}
      <Pressable
        className='border border-gray-300 rounded-lg flex-row items-center p-3 mt-4'
        onPress={() => setShowTimePicker(true)}
      >
        <Text className='flex-1 text-base'>
          {selectedTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
        <AntDesign name='clockcircle' size={20} color='purple' />
      </Pressable>

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode='time'
          display='default'
          onChange={(event, time) => {
            setShowTimePicker(false);
            if (time) {
              setSelectedTime(time);
              updateParent(selectedDate, time);
            }
          }}
        />
      )}
    </View>
  );
}
