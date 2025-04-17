import { ResponseType } from "@/types/ResponseTypes";

import { OtpVerificationType } from "./_schema/verifyOtp";

export interface VerifyOtpFormPropsType {
  onResend: (payload: string) => Promise<void>;
  onSubmit: (payload: OtpVerificationType) => Promise<ResponseType>;
}

export interface OtpTimerPropsType {
  email: string;
  onResend: (email: string) => Promise<void>;
}
