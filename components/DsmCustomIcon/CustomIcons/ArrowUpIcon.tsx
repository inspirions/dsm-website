import { CustomIconPropsType } from "../types";

const ArrowUpIcon = ({ size = 16, style, ...others }: CustomIconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 20"
      fill="currentColor"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path
        opacity="0.75"
        d="M7.00486 -1.60329e-06L0.0488286 10.1459L4.67433 10.1459L4.67433 20L9.33494 20L9.33494 10.1459L13.9604 10.1459L7.00486 -1.60329e-06Z"
      />
      <path
        opacity="0.75"
        d="M7.00195 -1.90735e-06L7.00195 20L9.33204 20L9.33204 10.1459L13.9575 10.1459L7.00195 -1.90735e-06Z"
      />
    </svg>
  );
};
export default ArrowUpIcon;
