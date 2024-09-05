/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Pressable,
} from 'react-native';

import { cn } from '@/lib';

type OTPInputProps = {
  length: number;
  onOTPComplete: (otp: string) => void;
};

const OTP: React.FC<OTPInputProps> = ({ length, onOTPComplete }) => {
  const [otpValues, setOtpValues] = React.useState<string[]>(
    Array(length).fill(''),
  );
  const [activeInputIndex, setActiveInputIndex] = React.useState<
    number | undefined
  >(0);
  const inputs = React.useRef<Array<TextInput | null>>([]);
  const hasCalledOnOTPComplete = React.useRef<boolean>(false);

  React.useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (text: string, index: number): void => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = text;
    setOtpValues(updatedOtpValues);

    // Move to the next input if it's not the last input
    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    // If the OTP is complete (all fields are filled), call the submit function
    if (updatedOtpValues.every(value => value.length === 1)) {
      if (!hasCalledOnOTPComplete.current) {
        setActiveInputIndex(undefined);
        onOTPComplete(updatedOtpValues.join(''));
        hasCalledOnOTPComplete.current = true;
      }
      inputs.current[length - 1]?.blur();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ): void => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      otpValues[index] === '' &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();

      hasCalledOnOTPComplete.current = false;
    }
  };

  const handleFocus = (index: number): void => {
    setActiveInputIndex(index); // Atualiza o índice ativo quando o campo recebe foco
  };

  const enableFocusContainer = (index: number): void => {
    inputs.current[index]?.focus();
  };

  return (
    <View className="flex-row justify-between">
      {otpValues.map((value, index) => (
        <Pressable
          key={index}
          onPress={() => enableFocusContainer(index)}
          className={cn(
            'h-[70px] w-[83px] bg-gray-100 rounded-xl items-center justify-center',
            activeInputIndex === index &&
              'bg-primary-900/5 border-[2px] border-primary-900',
          )}>
          <TextInput
            value={value}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            onFocus={() => handleFocus(index)}
            ref={input => {
              inputs.current[index] = input;
            }}
            className="font-bold text-2xl text-gray-900"
          />
        </Pressable>
      ))}
    </View>
  );
};

export { OTP };
