import Svg, { Path, G, Mask, SvgProps } from 'react-native-svg';

interface ActivityProps extends SvgProps {
  color?: string;
  filled?: boolean;
}

const Activity: React.FC<ActivityProps> = ({
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
            d="M15.7817 2.41C15.7817 1.08 16.8617 0 18.1917 0C19.5217 0 20.6017 1.08 20.6017 2.41C20.6017 3.74 19.5217 4.82 18.1917 4.82C16.8617 4.82 15.7817 3.74 15.7817 2.41ZM11.9316 12.7593L14.8216 9.0303L14.7816 9.0503C14.9416 8.8303 14.9716 8.5503 14.8616 8.3003C14.7526 8.0503 14.5116 7.8803 14.2526 7.8603C13.9816 7.8303 13.7126 7.9503 13.5516 8.1703L11.1326 11.3003L8.36156 9.1203C8.19156 8.9903 7.99156 8.9393 7.79156 8.9603C7.59256 8.9903 7.41256 9.0993 7.29156 9.2593L4.33256 13.1103L4.27156 13.2003C4.10156 13.5193 4.18156 13.9293 4.48156 14.1503C4.62156 14.2403 4.77156 14.3003 4.94156 14.3003C5.17256 14.3103 5.39156 14.1893 5.53156 14.0003L8.04156 10.7693L10.8916 12.9103L10.9816 12.9693C11.3016 13.1393 11.7016 13.0603 11.9316 12.7593ZM14.0516 1.7803C14.0116 2.0303 13.9916 2.2803 13.9916 2.5303C13.9916 4.7803 15.8116 6.5993 18.0516 6.5993C18.3016 6.5993 18.5416 6.5703 18.7916 6.5303V14.5993C18.7916 17.9903 16.7916 20.0003 13.3916 20.0003H6.00256C2.60156 20.0003 0.601562 17.9903 0.601562 14.5993V7.2003C0.601562 3.8003 2.60156 1.7803 6.00256 1.7803H14.0516Z"
            fill={color}
          />
        </Svg>
      ) : (
        <Svg width="22" height="21" viewBox="0 0 22 21" fill="none" {...props}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.81614 14.0031C5.65614 14.0031 5.49514 13.9521 5.35914 13.8481C5.03114 13.5951 4.96914 13.1241 5.22214 12.7961L8.21514 8.90611C8.33714 8.74711 8.51814 8.64411 8.71614 8.61911C8.91814 8.59311 9.11614 8.64911 9.27314 8.77411L12.0931 10.9891L14.5601 7.80611C14.8141 7.47711 15.2841 7.41611 15.6121 7.67211C15.9401 7.92611 16.0001 8.39711 15.7461 8.72411L12.8161 12.5041C12.6941 12.6621 12.5141 12.7651 12.3161 12.7891C12.1161 12.8161 11.9181 12.7581 11.7601 12.6351L8.94214 10.4211L6.41114 13.7101C6.26314 13.9021 6.04114 14.0031 5.81614 14.0031Z"
            fill={color}
          />
          <Mask
            id="mask0_7785_9386"
            maskUnits="userSpaceOnUse"
            x="15"
            y="0"
            width="7"
            height="6">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8984 0H21.2424V5.3449H15.8984V0Z"
              fill="white"
            />
          </Mask>
          <G mask="url(#mask0_7785_9386)">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5704 1.5C17.9244 1.5 17.3984 2.025 17.3984 2.672C17.3984 3.318 17.9244 3.845 18.5704 3.845C19.2164 3.845 19.7424 3.318 19.7424 2.672C19.7424 2.025 19.2164 1.5 18.5704 1.5ZM18.5704 5.345C17.0974 5.345 15.8984 4.146 15.8984 2.672C15.8984 1.198 17.0974 0 18.5704 0C20.0444 0 21.2424 1.198 21.2424 2.672C21.2424 4.146 20.0444 5.345 18.5704 5.345Z"
              fill={color}
            />
          </G>
          <Mask
            id="mask1_7785_9386"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="21"
            height="21">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.601562 0.841797H20.4635V20.7028H0.601562V0.841797Z"
              fill="white"
            />
          </Mask>
          <G mask="url(#mask1_7785_9386)">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.8346 20.7028H6.23056C2.86356 20.7028 0.601562 18.3378 0.601562 14.8178V6.7358C0.601562 3.2108 2.86356 0.841797 6.23056 0.841797H13.4986C13.9126 0.841797 14.2486 1.1778 14.2486 1.5918C14.2486 2.0058 13.9126 2.3418 13.4986 2.3418H6.23056C3.72256 2.3418 2.10156 4.0658 2.10156 6.7358V14.8178C2.10156 17.5228 3.68356 19.2028 6.23056 19.2028H14.8346C17.3426 19.2028 18.9636 17.4818 18.9636 14.8178V7.7788C18.9636 7.3648 19.2996 7.0288 19.7136 7.0288C20.1276 7.0288 20.4636 7.3648 20.4636 7.7788V14.8178C20.4636 18.3378 18.2016 20.7028 14.8346 20.7028Z"
              fill={color}
            />
          </G>
        </Svg>
      )}
    </>
  );
};

export { Activity };
