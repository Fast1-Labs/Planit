import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeSection() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  return (
    <View className='p-5 gap-2'>
      {/* Date & Time */}
      <Text className='text-xl font-bold mb-2'>Date & Time</Text>
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

      {/* Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode='date'
          display='default'
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setSelectedDate(date);
          }}
        />
      )}

      {/* Start and End Time */}
      <View className='flex-row justify-between mt-5'>
        <View className='w-[48%]'>
          <Text className='text-xl font-semibold mb-2'>Start time</Text>
          <Pressable
            className='border border-gray-300 rounded-lg p-3'
            onPress={() => setShowStartTime(true)}
          >
            <Text>
              {startTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </Pressable>
          {showStartTime && (
            <DateTimePicker
              value={startTime}
              mode='time'
              display='default'
              onChange={(event, time) => {
                setShowStartTime(false);
                if (time) setStartTime(time);
              }}
            />
          )}
        </View>

        <View className='w-[48%]'>
          <Text className='text-lg font-semibold mb-2'>End time</Text>
          <Pressable
            className='border border-gray-300 rounded-lg p-3'
            onPress={() => setShowEndTime(true)}
          >
            <Text>
              {endTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </Pressable>
          {showEndTime && (
            <DateTimePicker
              value={endTime}
              mode='time'
              display='default'
              onChange={(event, time) => {
                setShowEndTime(false);
                if (time) setEndTime(time);
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
