import { ResponseType } from "@/types/ResponseTypes";

import { ResetPasswordType } from "./_schema/resetPassword";

export interface ResetPasswordFormPropsType {
  onSubmit: (payload: ResetPasswordType) => Promise<ResponseType>;
}
