import { supabase } from '@/utils/supabase';

export const fetchTasks = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) throw new Error('User not logged in');

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .eq('user_id', user?.id);

    if (error) {
      console.log(error);
    }

    return data;
  } catch (error) {
    throw new Error('Failed while fetching tasks');
  }
};

export const createTasks = async ({
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

  return data;
};
