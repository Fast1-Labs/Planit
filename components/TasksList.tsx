import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '@/functions/fetchTasks';
import TaskListItem from './TaskListItem';

export default function TasksList() {
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({ queryKey: ['tasks'], queryFn: fetchTasks });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskListItem title={item.title} time={item.due_date} />
      )}
    />
  );
}
