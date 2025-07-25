import { CustomIconPropsType } from "../types";

const DescriptionIcon = ({
  size = 16,
  style,
  ...others
}: CustomIconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 5h3m4 0h9" />
      <path d="M3 10h11m4 0h1" />
      <path d="M5 15h5m4 0h7" />
      <path d="M3 20h9m4 0h3" />
    </svg>
  );
};
export default DescriptionIcon;
