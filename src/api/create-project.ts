import { NewProjectSchemaProps } from '@/pages/app/manage/new-project';

import { api } from './api';

export const createProject = async ({
  name,
  color,
}: NewProjectSchemaProps): Promise<void> => {
  await api.post('/create-project', { name, color });
};
