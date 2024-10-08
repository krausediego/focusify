import Svg, { Path, SvgProps } from 'react-native-svg';

interface CheckProps extends SvgProps {
  color?: string;
}

const Check: React.FC<CheckProps> = ({ color = 'white', ...props }) => {
  return (
    <Svg width="13" height="9" viewBox="0 0 13 9" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0607 0.43934C12.6464 1.02513 12.6464 1.97487 12.0607 2.56066L6.06066 8.56066C5.47487 9.14645 4.52513 9.14645 3.93934 8.56066L0.93934 5.56066C0.353553 4.97487 0.353553 4.02513 0.93934 3.43934C1.52513 2.85355 2.47487 2.85355 3.06066 3.43934L5 5.37868L9.93934 0.43934C10.5251 -0.146447 11.4749 -0.146447 12.0607 0.43934Z"
        fill={color}
      />
    </Svg>
  );
};

export { Check };
