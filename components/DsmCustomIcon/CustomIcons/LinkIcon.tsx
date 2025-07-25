import { CustomIconPropsType } from "../types";

const LinkIcon = ({ size = 16, style, ...others }: CustomIconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
      <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
    </svg>
  );
};
export default LinkIcon;
