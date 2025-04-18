import { ResponseType } from "@/types/ResponseTypes";

import { ForgotPasswordType } from "./_schema/forgotPassword";

export interface ForgotPasswordFormPropsType {
  onSubmit: (payload: ForgotPasswordType) => Promise<ResponseType>;
}
