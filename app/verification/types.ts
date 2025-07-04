import { ResponseType } from "@/types/ResponseTypes";

import { OtpVerificationType } from "./_schema/verifyOtp";

export interface VerifyOtpPropsType extends OtpVerificationType {
  email: string;
  returnTo: string;
}

export interface VerifyOtpFormPropsType {
  onResend: (payload: string) => Promise<void>;
  onSubmit: (payload: VerifyOtpPropsType) => Promise<ResponseType>;
}

export interface OtpTimerPropsType {
  onResend: VoidFunction;
}
