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
