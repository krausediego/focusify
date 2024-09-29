import { z } from 'zod';

export const newProjectSchema = z.object({
  name: z.string().min(4),
  color: z.string().min(7),
});

export type NewProjectSchemaProps = z.infer<typeof newProjectSchema>;
