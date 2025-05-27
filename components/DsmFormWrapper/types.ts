import { ReactElement } from "react";

export interface DsmFormWrapperPropsType {
  title: string;
  description: string;
  formTitle?: ReactElement;
  formView: () => ReactElement;
}
