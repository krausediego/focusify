import React, { useEffect, useRef } from 'react';
import { Animated, Easing, type ViewProps } from 'react-native';

import { cn } from '@/lib';
import { LoaderCircle } from 'lucide-react-native';

interface SpinnerProps extends ViewProps {
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  color = 'white',
  className,
  ...props
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    spinAnimation.start();

    return () => spinAnimation.stop();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      className={cn('items-center justify-center', className)}
      style={{ transform: [{ rotate: spin }] }}
      {...props}>
      <LoaderCircle color={color} />
    </Animated.View>
  );
};

export { Spinner };
