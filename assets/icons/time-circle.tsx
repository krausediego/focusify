import Svg, { Path, SvgProps } from 'react-native-svg';

interface TimeCircleProps extends SvgProps {
  color?: string;
  filled?: boolean;
}

const TimeCircle: React.FC<TimeCircleProps> = ({
  color = '#9E9E9E',
  filled = false,
  ...props
}) => {
  return (
    <>
      {filled ? (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" {...props}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8008 20.0001C5.28078 20.0001 0.800781 15.5301 0.800781 10.0001C0.800781 4.48012 5.28078 0.00012207 10.8008 0.00012207C16.3308 0.00012207 20.8008 4.48012 20.8008 10.0001C20.8008 15.5301 16.3308 20.0001 10.8008 20.0001ZM13.9908 13.7101C14.1108 13.7801 14.2408 13.8201 14.3808 13.8201C14.6308 13.8201 14.8808 13.6901 15.0208 13.4501C15.2308 13.1001 15.1208 12.6401 14.7608 12.4201L11.2008 10.3001V5.68012C11.2008 5.26012 10.8608 4.93012 10.4508 4.93012C10.0408 4.93012 9.70078 5.26012 9.70078 5.68012V10.7301C9.70078 10.9901 9.84078 11.2301 10.0708 11.3701L13.9908 13.7101Z"
            fill={color}
          />
        </Svg>
      ) : (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" {...props}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8008 1.5C6.11378 1.5 2.30078 5.313 2.30078 10C2.30078 14.687 6.11378 18.5 10.8008 18.5C15.4878 18.5 19.3008 14.687 19.3008 10C19.3008 5.313 15.4878 1.5 10.8008 1.5ZM10.8008 20C5.28678 20 0.800781 15.514 0.800781 10C0.800781 4.486 5.28678 0 10.8008 0C16.3148 0 20.8008 4.486 20.8008 10C20.8008 15.514 16.3148 20 10.8008 20Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.2309 13.6925C14.0999 13.6925 13.9679 13.6585 13.8469 13.5875L10.0769 11.3385C9.85094 11.2025 9.71094 10.9575 9.71094 10.6935V5.84546C9.71094 5.43146 10.0469 5.09546 10.4609 5.09546C10.8759 5.09546 11.2109 5.43146 11.2109 5.84546V10.2675L14.6159 12.2975C14.9709 12.5105 15.0879 12.9705 14.8759 13.3265C14.7349 13.5615 14.4859 13.6925 14.2309 13.6925Z"
            fill={color}
          />
        </Svg>
      )}
    </>
  );
};

export { TimeCircle };
