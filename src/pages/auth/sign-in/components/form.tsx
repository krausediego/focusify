import { useFormContext } from 'react-hook-form';
import { View } from 'react-native';

import {
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components';
import { Mail, Lock } from 'assets/icons';

import { SignInSchemaProps } from '.';

const FormSignIn: React.FC = () => {
  const form = useFormContext<SignInSchemaProps>();

  return (
    <View className="gap-4">
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" icon={<Mail />} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Senha"
                  icon={<Lock />}
                  isPassword
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </View>
  );
};

export { FormSignIn };
