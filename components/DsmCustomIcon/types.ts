import { ICON_LIST } from "./CustomIcons";

export type IconNameType = keyof typeof ICON_LIST;

export interface GetSelectedIconPropsType extends CustomIconPropsType {
  iconName: IconNameType;
}
export interface CustomIconPropsType
  extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}
