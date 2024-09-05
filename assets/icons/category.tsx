import Svg, { Path, SvgProps } from 'react-native-svg';

interface CategoryProps extends SvgProps {
  color?: string;
  filled?: boolean;
}

const Category: React.FC<CategoryProps> = ({
  color = '#9E9E9E',
  filled = false,
  ...props
}) => {
  return (
    <>
      {filled ? (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.45312 10.9506H10.4531V2.95064H2.45312V10.9506Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.352 4.12154L14.624 2.05054L12.554 9.77854L20.281 11.8485L22.352 4.12154Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.45312 21.9496H10.4531V13.9496H2.45312V21.9496Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.4531 21.9496H21.4531V13.9496H13.4531V21.9496Z"
            fill={color}
          />
        </Svg>
      ) : (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.2578 13.6433H21.7578V22.1433H13.2578V13.6433ZM14.7578 15.1433V20.6433H20.2578V15.1433H14.7578Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25781 13.6433H10.7578V22.1433H2.25781V13.6433ZM3.75781 15.1433V20.6433H9.25781V15.1433H3.75781Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.25781 2.64331H10.7578V11.1433H2.25781V2.64331ZM3.75781 4.14331V9.64331H9.25781V4.14331H3.75781Z"
            fill={color}
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5039 1.68811L22.7143 3.88807L20.5143 12.0984L12.3039 9.89848L14.5039 1.68811ZM15.5646 3.52523L14.1411 8.83782L19.4537 10.2613L20.8772 4.94873L15.5646 3.52523Z"
            fill={color}
          />
        </Svg>
      )}
    </>
  );
};

export { Category };
