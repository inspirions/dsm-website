import { CustomIconPropsType } from "../types";

const DotIcon = ({ size = 16, style, ...others }: CustomIconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      strokeWidth="1.5"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    </svg>
  );
};
export default DotIcon;
