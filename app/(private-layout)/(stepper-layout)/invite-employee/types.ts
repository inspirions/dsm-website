import { ResponseType } from "@/types/ResponseTypes";

import { InviteEmployeeType } from "./_schema/InviteEmployee";

export interface InviteEmployeeFormPropsType {
  onSubmit: (
    payload: InviteEmployeeType[],
    orgId: string
  ) => Promise<ResponseType>;
}
