import Svg, { Path, G, Mask, SvgProps } from 'react-native-svg';

interface SearchProps extends SvgProps {
  color?: string;
}

const Search: React.FC<SearchProps> = ({ color = '#BDBDBD', ...props }) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <Mask
        id="mask0_7820_18083"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="17">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.667969 0.166687H16.8986V16.3975H0.667969V0.166687Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_7820_18083)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.7838 1.41669C4.99797 1.41669 1.91797 4.49585 1.91797 8.28169C1.91797 12.0675 4.99797 15.1475 8.7838 15.1475C12.5688 15.1475 15.6488 12.0675 15.6488 8.28169C15.6488 4.49585 12.5688 1.41669 8.7838 1.41669ZM8.7838 16.3975C4.3088 16.3975 0.667969 12.7567 0.667969 8.28169C0.667969 3.80669 4.3088 0.166687 8.7838 0.166687C13.2588 0.166687 16.8988 3.80669 16.8988 8.28169C16.8988 12.7567 13.2588 16.3975 8.7838 16.3975Z"
          fill={color}
        />
      </G>
      <Mask
        id="mask1_7820_18083"
        maskUnits="userSpaceOnUse"
        x="13"
        y="13"
        width="5"
        height="5">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.3672 13.2558H17.5539V17.4348H13.3672V13.2558Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_7820_18083)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.9291 17.4348C16.7699 17.4348 16.6099 17.3739 16.4874 17.2523L13.5507 14.3239C13.3066 14.0798 13.3057 13.6839 13.5499 13.4398C13.7932 13.1939 14.1891 13.1956 14.4341 13.4381L17.3707 16.3673C17.6149 16.6114 17.6157 17.0064 17.3716 17.2506C17.2499 17.3739 17.0891 17.4348 16.9291 17.4348Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export { Search };
