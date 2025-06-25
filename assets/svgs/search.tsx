import Svg, { G, Mask, Path, SvgProps } from "react-native-svg";

export function Search({ fill = "#BDBDBD", ...props }: SvgProps) {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
      <Mask
        id="mask0_8487_18142"
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="17"
        height="17"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.66797 2.16669H17.8986V18.3975H1.66797V2.16669Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0_8487_18142)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.7838 3.41669C5.99797 3.41669 2.91797 6.49585 2.91797 10.2817C2.91797 14.0675 5.99797 17.1475 9.7838 17.1475C13.5688 17.1475 16.6488 14.0675 16.6488 10.2817C16.6488 6.49585 13.5688 3.41669 9.7838 3.41669ZM9.7838 18.3975C5.3088 18.3975 1.66797 14.7567 1.66797 10.2817C1.66797 5.80669 5.3088 2.16669 9.7838 2.16669C14.2588 2.16669 17.8988 5.80669 17.8988 10.2817C17.8988 14.7567 14.2588 18.3975 9.7838 18.3975Z"
          fill={fill}
        />
      </G>
      <Mask
        id="mask1_8487_18142"
        maskUnits="userSpaceOnUse"
        x="14"
        y="15"
        width="5"
        height="5"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3672 15.2558H18.5539V19.4348H14.3672V15.2558Z"
          fill="white"
        />
      </Mask>
      <G mask="url(#mask1_8487_18142)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9291 19.4348C17.7699 19.4348 17.6099 19.3739 17.4874 19.2523L14.5507 16.3239C14.3066 16.0798 14.3057 15.6839 14.5499 15.4398C14.7932 15.1939 15.1891 15.1956 15.4341 15.4381L18.3707 18.3673C18.6149 18.6114 18.6157 19.0064 18.3716 19.2506C18.2499 19.3739 18.0891 19.4348 17.9291 19.4348Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
}
