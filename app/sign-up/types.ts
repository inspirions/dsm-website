import { RegisterType } from "./_schema/signUp";

import { ResponseType } from "@/types/ResponseTypes";

export interface SignUpFormPropsType {
  onSubmit: (payload: RegisterType) => Promise<ResponseType>;
}
