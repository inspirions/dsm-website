import { Flex } from "@mantine/core";

import { INVITE_EMPLOYEE_PAGE } from "@/constants/dataTestId";

import { InviteEmployeeFormView } from "./_viewModules/InviteEmployeeFormView";
import { getOrganizationRole } from "./actions";
import { SearchParamsType } from "../../invitation/types";

const InviteEmployee = async ({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) => {
  const { orgId: org = "" } = await searchParams;
  const res = await getOrganizationRole(org);
  const roles = res?.data?.roles;
  return (
    <Flex
      h="100%"
      gap="md"
      direction="column"
      data-testid={INVITE_EMPLOYEE_PAGE.ROOT}
    >
      <InviteEmployeeFormView roles={roles ?? []} />
    </Flex>
  );
};

export default InviteEmployee;
