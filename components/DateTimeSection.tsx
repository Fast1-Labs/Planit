import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

type DateTimeSectionProps = {
  onDateTimeChange: (data: {
    date: Date;
    startTime: Date;
    endTime: Date;
  }) => void;
};

export default function DateTimeSection({
  onDateTimeChange,
}: DateTimeSectionProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const updateParent = (newDate: Date, newStart: Date, newEnd: Date) => {
    onDateTimeChange({
      date: newDate,
      startTime: newStart,
      endTime: newEnd,
    });
  };

  return (
    <View className='gap-2'>
      {/* Date */}
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
            if (date) {
              setSelectedDate(date);
              updateParent(date, startTime, endTime);
            }
          }}
        />
      )}

      {/* Start and End Time */}
      <View className='flex-row mt-5 items-center justify-between'>
        <View style={{ width: '48%' }}>
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
                if (time) {
                  setStartTime(time);
                  updateParent(selectedDate, time, endTime);
                }
              }}
            />
          )}
        </View>

        <View style={{ width: '48%' }}>
          <Text className='text-xl font-semibold mb-2'>End time</Text>
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
                if (time) {
                  setEndTime(time);
                  updateParent(selectedDate, startTime, time);
                }
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
