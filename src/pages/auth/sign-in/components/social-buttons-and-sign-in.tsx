import { useFormContext, SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';

import { signIn } from '@/api';
import { Button, TextButton } from '@/components';
import { useAuth } from '@/contexts';
import { useMutation } from '@tanstack/react-query';
import { AppleLogoSvg, FacebookLogoSvg, GoogleLogoSVG } from 'assets/svg';

import { SignInSchemaProps } from './schema';

const SocialButtonsAndSignIn: React.FC = () => {
  const { setSession } = useAuth();

  const { handleSubmit } = useFormContext<SignInSchemaProps>();

  const { mutateAsync: signInFn } = useMutation({ mutationFn: signIn });

  const handleSignInWithEmailAndPassword: SubmitHandler<
    SignInSchemaProps
  > = async values => {
    try {
      const { session } = await signInFn(values);
      setSession(session);
    } catch (error: any) {
      console.log('AQUI', error?.response?.data);
    }
  };

  return (
    <View className="gap-5">
      <Button type="social">
        <View className="absolute left-4">
          <GoogleLogoSVG />
        </View>
        <TextButton>Continue com o Google</TextButton>
      </Button>
      <Button type="social">
        <View className="absolute left-4">
          <AppleLogoSvg />
        </View>
        <TextButton>Continue com a Apple</TextButton>
      </Button>
      <Button type="social">
        <View className="absolute left-4">
          <FacebookLogoSvg />
        </View>
        <TextButton>Continue com o Facebook</TextButton>
      </Button>
      <Button onPress={handleSubmit(handleSignInWithEmailAndPassword)}>
        <TextButton>Entrar</TextButton>
      </Button>
    </View>
  );
};

export { SocialButtonsAndSignIn };
