import Svg, { Path, SvgProps } from 'react-native-svg';

interface LockProps extends SvgProps {
  color?: string;
}

const Lock: React.FC<LockProps> = ({ color = '#212121', ...props }) => {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.1086 8.99989C13.7636 8.99989 13.4836 8.71989 13.4836 8.37489V6.58572C13.4836 4.83905 12.0628 3.41822 10.3161 3.41822H10.3028C9.45865 3.41822 8.66781 3.74322 8.07031 4.33572C7.46865 4.93072 7.13615 5.72489 7.13281 6.57155V8.37489C7.13281 8.71989 6.85281 8.99989 6.50781 8.99989C6.16281 8.99989 5.88281 8.71989 5.88281 8.37489V6.58572C5.88781 5.38572 6.35198 4.27822 7.18948 3.44822C8.02781 2.61739 9.13448 2.13655 10.3186 2.16822C12.752 2.16822 14.7336 4.14989 14.7336 6.58572V8.37489C14.7336 8.71989 14.4536 8.99989 14.1086 8.99989Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.12094 8.94067C5.7226 8.94067 4.58594 10.0773 4.58594 11.4757V15.0498C4.58594 16.4482 5.7226 17.5848 7.12094 17.5848H13.4884C14.8859 17.5848 16.0234 16.4482 16.0234 15.0498V11.4757C16.0234 10.0773 14.8859 8.94067 13.4884 8.94067H7.12094ZM13.4884 18.8348H7.12094C5.03344 18.8348 3.33594 17.1373 3.33594 15.0498V11.4757C3.33594 9.38817 5.03344 7.69067 7.12094 7.69067H13.4884C15.5759 7.69067 17.2734 9.38817 17.2734 11.4757V15.0498C17.2734 17.1373 15.5759 18.8348 13.4884 18.8348Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3047 14.813C9.95969 14.813 9.67969 14.533 9.67969 14.188V12.3372C9.67969 11.9922 9.95969 11.7122 10.3047 11.7122C10.6497 11.7122 10.9297 11.9922 10.9297 12.3372V14.188C10.9297 14.533 10.6497 14.813 10.3047 14.813Z"
        fill={color}
      />
    </Svg>
  );
};

export { Lock };
