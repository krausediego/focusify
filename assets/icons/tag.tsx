import Svg, { Path, SvgProps } from 'react-native-svg';

interface TagProps extends SvgProps {
  color?: string;
}

const Tag: React.FC<TagProps> = ({ color = '#212121', ...props }) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M22.8103 13.25L13.5 3.93969C13.3612 3.7998 13.196 3.68889 13.014 3.61341C12.832 3.53792 12.6368 3.49938 12.4397 3.50001H3.75001C3.5511 3.50001 3.36033 3.57903 3.21968 3.71968C3.07903 3.86033 3.00001 4.0511 3.00001 4.25001V12.9397C2.99938 13.1368 3.03792 13.332 3.11341 13.514C3.18889 13.696 3.2998 13.8612 3.43969 14L12.75 23.3103C12.8893 23.4496 13.0547 23.5602 13.2367 23.6356C13.4187 23.711 13.6138 23.7498 13.8108 23.7498C14.0078 23.7498 14.2029 23.711 14.3849 23.6356C14.5669 23.5602 14.7323 23.4496 14.8716 23.3103L22.8103 15.3716C22.9496 15.2323 23.0602 15.0669 23.1356 14.8849C23.211 14.7029 23.2498 14.5078 23.2498 14.3108C23.2498 14.1138 23.211 13.9187 23.1356 13.7367C23.0602 13.5547 22.9496 13.3893 22.8103 13.25ZM13.8103 22.25L4.50001 12.9397V5.00001H12.4397L21.75 14.3103L13.8103 22.25ZM9.00001 8.37501C9.00001 8.59751 8.93403 8.81502 8.81041 9.00002C8.68679 9.18503 8.51109 9.32922 8.30553 9.41437C8.09996 9.49952 7.87376 9.5218 7.65553 9.47839C7.4373 9.43498 7.23685 9.32784 7.07951 9.1705C6.92218 9.01317 6.81503 8.81271 6.77162 8.59448C6.72822 8.37626 6.75049 8.15006 6.83564 7.94449C6.92079 7.73892 7.06499 7.56322 7.24999 7.4396C7.435 7.31599 7.6525 7.25001 7.87501 7.25001C8.17338 7.25001 8.45952 7.36853 8.6705 7.57951C8.88148 7.79049 9.00001 8.07664 9.00001 8.37501Z"
        fill={color}
      />
    </Svg>
  );
};

export { Tag };
