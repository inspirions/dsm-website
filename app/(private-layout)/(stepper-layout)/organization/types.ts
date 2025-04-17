import { ResponseType } from "@/types/ResponseTypes";

import { OrganizationType } from "./_schema/organization";

export interface CreateOrganizationFormPropsType {
  onSubmit: (payload: OrganizationType) => Promise<ResponseType>;
}
