import { TaskResponse } from '@/contexts';

import { api } from './api';

export const getAllActiveTasks = async (): Promise<TaskResponse[] | null> => {
  try {
    const { data } = await api.get<{ tasks: TaskResponse[] | null }>(
      '/get-all-active-tasks',
    );

    return data.tasks;
  } catch (error: any) {
    console.log(error);
  }
};
