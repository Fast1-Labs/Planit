import { supabase } from '@/utils/supabase';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { View } from 'react-native';

const createTasks = async ({
  title,
  description,
  dueDate,
  status,
}: {
  title: string;
  description: string;
  dueDate: string;
  status: string;
}) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error('User is not logged in');

  const { data, error: insertError } = await supabase.from('tasks').insert({
    title,
    description,
    due_date: dueDate,
    status,
    user_id: user?.id,
  });

  if (insertError) throw new Error(insertError.message);
};

export default function Create() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  return <View></View>;
}
