import { ResponseType } from "@/types/ResponseTypes";

import { LoginType } from "./_schema/login";

export interface LoginFormPropsType {
  onSubmit: (payload: LoginType) => Promise<ResponseType>;
}
