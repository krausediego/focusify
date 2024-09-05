import Svg, { Path, SvgProps } from 'react-native-svg';

interface ArrowDownProps extends SvgProps {
  color?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({
  color = '#212121',
  ...props
}) => {
  return (
    <Svg width="14" height="9" viewBox="0 0 14 9" fill="none" {...props}>
      <Path
        d="M0.726027 1.14137C0.947916 0.919482 1.29514 0.899311 1.53981 1.08086L1.60991 1.14137L7.0013 6.53248L12.3927 1.14137C12.6146 0.919482 12.9618 0.899311 13.2065 1.08086L13.2766 1.14137C13.4985 1.36326 13.5186 1.71048 13.3371 1.95516L13.2766 2.02525L7.44324 7.85859C7.22135 8.08048 6.87414 8.10065 6.62946 7.9191L6.55936 7.85859L0.726027 2.02525C0.481949 1.78118 0.481949 1.38545 0.726027 1.14137Z"
        fill={color}
      />
    </Svg>
  );
};

export { ArrowDown };
