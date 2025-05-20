export interface DsmRippleContainerPropsType {
  /** number of concentric circles (max 10) */
  count?: number;
  /** growth scale of each circle */
  scale?: number;
  /** diameter of the “base” circle (px) */
  size?: number;
  /** hex border color for the innermost border circle */
  borderColor?: string;
  /** background color of the innermost filled circle */
  innerColor?: string;
  /** icon to render in the center */
  children?: React.ReactNode;
}
