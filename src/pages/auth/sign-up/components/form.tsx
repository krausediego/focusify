import { View } from 'react-native';

import { Input } from '@/components';
import { Mail, Lock } from 'assets/icons';

const FormSignUp: React.FC = () => {
  return (
    <View className="gap-4">
      <Input label="Email" placeholder="Email" icon={<Mail />} />
      <Input label="Senha" placeholder="Senha" icon={<Lock />} isPassword />
      <Input
        label="Repita a senha"
        placeholder="Repita a senha"
        icon={<Lock />}
        isPassword
      />
    </View>
  );
};

export { FormSignUp };
