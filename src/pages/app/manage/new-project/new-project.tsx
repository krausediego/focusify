import { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createProject } from '@/api';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  TextButton,
} from '@/components';
import { useNavigation } from '@/hooks';
import { colors } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Check, Work } from 'assets/icons';

import { newProjectSchema, NewProjectSchemaProps } from './schema';

const NewProjectPage: React.FC = () => {
  const { navigate } = useNavigation();

  const [colorSelected, setColorSelected] = useState<string | undefined>(
    undefined,
  );

  const form = useForm<NewProjectSchemaProps>({
    resolver: zodResolver(newProjectSchema),
  });

  const { mutateAsync: createProjectFn, isPending: isLoading } = useMutation({
    mutationFn: createProject,
  });

  const handleCreateProject: SubmitHandler<
    NewProjectSchemaProps
  > = async values => {
    try {
      await createProjectFn(values);
      navigate('ListTasks');
    } catch (error) {
      console.log('Error in create project.', error);
    }
  };

  const handleCancel = useCallback(() => {
    navigate('ListTasks');
  }, [navigate]);

  return (
    <View className="flex-1 bg-white gap-6 py-3 px-6">
      <Form {...form}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Projeto</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome do Projeto"
                  icon={<Work color="#212121" />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="color"
          control={form.control}
          render={() => {
            return (
              <FormItem>
                <FormLabel>Cor do Projeto</FormLabel>
                <FormControl>
                  <View className="flex-row gap-7 flex-wrap">
                    {colors.map(color => {
                      return (
                        <TouchableOpacity
                          key={color}
                          onPress={() => {
                            setColorSelected(prev => {
                              if (prev === color) {
                                form.resetField('color');
                                form.setError('color', { message: 'Required' });
                                return undefined;
                              }
                              form.setValue('color', color);
                              form.clearErrors('color');
                              return color;
                            });
                          }}
                          activeOpacity={0.7}>
                          <View
                            className="w-[52px] h-[52px] rounded-full items-center justify-center"
                            style={{ backgroundColor: color }}>
                            {color === colorSelected && (
                              <Check width={20} height={20} />
                            )}
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      </Form>

      <View className="flex-row mt-auto gap-4">
        <Button onPress={handleCancel} disabled={isLoading} type="primaryLight">
          <TextButton>Cancelar</TextButton>
        </Button>

        <Button
          onPress={form.handleSubmit(handleCreateProject)}
          isLoading={isLoading}>
          <TextButton>Adicionar</TextButton>
        </Button>
      </View>
    </View>
  );
};

export { NewProjectPage };
