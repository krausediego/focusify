import { useCallback } from 'react';
import { View } from 'react-native';

import { Button, TextButton } from '@/components';
import { useNavigation } from '@/hooks';

const SignUpOrSignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToSignUp = useCallback(() => {
    navigate('SignUp');
  }, [navigate]);

  const handleNavigateToSignIn = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <View className="w-full gap-5">
      <Button onPress={handleNavigateToSignUp}>
        <TextButton>Cadastre-se</TextButton>
      </Button>
      <Button type="primaryLight" onPress={handleNavigateToSignIn}>
        <TextButton>Entrar</TextButton>
      </Button>
    </View>
  );
};

export { SignUpOrSignIn };
