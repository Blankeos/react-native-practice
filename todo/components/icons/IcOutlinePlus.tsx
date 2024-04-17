import Svg, { Path } from "react-native-svg";

export function IcOutlinePlus(props: {
  width?: string | number;
  height?: string | number;
  color?: string;
}) {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      color={props.color}
      viewBox="0 0 24 24"
    >
      <Path
        fill="currentColor"
        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
      ></Path>
    </Svg>
  );
}
