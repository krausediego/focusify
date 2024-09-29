import { api } from './api';

export interface Project {
  id: string;
  name: string;
  color: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export const getAllProjects = async (): Promise<Project[] | []> => {
  try {
    const { data } = await api.get<{ projects: Project[] | [] }>(
      '/find-all-paginated-projects?page=1',
    );

    return data.projects;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};
