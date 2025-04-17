"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldInputProps,
  FormikProps,
} from "formik";

import { Divider, Flex, Group, Select, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmIconButton } from "@/components/DsmIconButton";
import { DsmInfoAvatar } from "@/components/DsmInfoAvatar";
import { DsmTextInputWithSelect } from "@/components/DsmTextInputWithSelect";

import { useUserInfoContext } from "@/providers/UserInfoProvider";

import { handleOrganizationNav } from "@/app/(private-layout)/get-started/actions";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { DSM_APP_URL } from "@/constants/commons";
import { INVITE_EMPLOYEE_PAGE } from "@/constants/dataTestId";
import { routes } from "@/constants/routeConstants";

import {
  INVITE_EMPLOYEE_SCHEMA,
  inviteEmployeeFormInitialValues,
  InviteEmployeeType,
} from "../../_schema/InviteEmployee";

import { InviteEmployeeFormPropsType } from "../../types";

const selectData = [
  { label: "User", value: "employee" },
  { label: "Admin", value: "admin" },
];

const { GET_STARTED } = routes;

export const InviteEmployeeForm = ({
  onSubmit,
}: InviteEmployeeFormPropsType) => {
  const router = useRouter();
  const { userId } = useUserInfoContext();
  const searchParams = useSearchParams();
  const orgId = searchParams.get("orgId") || "";

  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const [userType, setUserType] = useState("employee");
  const [invites, setInvites] = useState<InviteEmployeeType[]>([]);

  const handleSubmit = () => {
    formSubmit(onSubmit(invites, orgId));
  };

  const handleChange =
    (field: FieldInputProps<InviteEmployeeType>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field.onChange({ target: { name: field.name, value } });
    };

  const handleUserTypeChange = (value: string | null) => {
    if (value) {
      setUserType(value);
    }
  };

  const handleKeyDown =
    (form: FormikProps<InviteEmployeeType>) =>
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        const { value } = event.currentTarget;
        form.setTouched({ to: true });
        if (form.isValid && value) {
          setInvites([
            ...invites,
            {
              to: value,
              by: userId,
              organizationId: orgId,
              userType: userType,
            },
          ]);
          form.resetForm();
        }
      }
    };

  const handleChangeRole = (email: string) => (value: string | null) => {
    if (!value) return;

    const tempEmails = invites.map((indvEmail) => {
      if (indvEmail.to === email) {
        return { ...indvEmail, userType: value };
      }
      return indvEmail;
    });
    setInvites(tempEmails);
  };

  const handleRemoveEmail = (emailToRemove: string) => () => {
    const tempEmails = invites.filter(
      (indvEmail) => indvEmail.to !== emailToRemove
    );
    setInvites(tempEmails);
  };

  const handleSkipClick = async () => {
    sessionStorage.clear();
    await handleOrganizationNav(orgId);
    router.push(GET_STARTED);
    window.open(DSM_APP_URL, "_blank");
  };

  return (
    <Formik
      initialValues={inviteEmployeeFormInitialValues}
      validationSchema={INVITE_EMPLOYEE_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form style={{ height: "100%" }} data-testid={INVITE_EMPLOYEE_PAGE.FORM}>
        <Flex h={"100%"} direction={"column"} justify={"space-between"}>
          <Flex direction={"column"} gap={"md"}>
            <Field name="to">
              {({ field, meta, form }: FieldProps) => (
                <DsmTextInputWithSelect
                  label="Invite By Email"
                  placeholder="Email"
                  isDisabled={!orgId}
                  error={meta.error && meta.touched ? meta.error : undefined}
                  value={field.value}
                  onKeyDown={handleKeyDown(form)}
                  onChange={handleChange(field)}
                  selectProps={{
                    placeholder: "Pick Role",
                    data: selectData,
                    value: userType,
                    allowDeselect: false,
                    onChange: handleUserTypeChange,
                  }}
                />
              )}
            </Field>
            {!orgId && <Text c={"red"}>Organization not found</Text>}
            {!!invites.length && (
              <>
                <Divider style={{ borderColor: "#f1f1f1" }} />
                <Flex direction="column" gap={"sm"}>
                  <Text lh={1} fw={"bold"}>
                    Employees to Invite
                  </Text>
                  <Flex direction="column" gap={"4px"}>
                    {invites.map((indvEmail) => (
                      <Flex key={indvEmail.to} justify="space-between">
                        <DsmInfoAvatar
                          label={indvEmail.to}
                          avatarProps={{ size: 32, radius: "lg" }}
                        />
                        <Flex gap={"xs"} align={"center"}>
                          <Select
                            w={100}
                            size="xs"
                            data={selectData}
                            defaultValue="User"
                            allowDeselect={false}
                            placeholder="Pick Role"
                            value={indvEmail.userType}
                            onChange={handleChangeRole(indvEmail.to)}
                          />
                          <DsmIconButton
                            variant="subtle"
                            iconProps={{ icon: "trash", color: "red" }}
                            tooltipProps={{ label: "Remove" }}
                            onClick={handleRemoveEmail(indvEmail.to)}
                          />
                        </Flex>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </>
            )}
          </Flex>
          <Group justify="flex-end">
            <DsmButton
              hideIcon
              size="xs"
              color="blue"
              variant="transparent"
              onClick={handleSkipClick}
            >
              Skip for now
            </DsmButton>
            <DsmButton
              size="xs"
              color="blue"
              loading={isSubmitting}
              disabled={!invites.length}
              iconProps={{ icon: "user" }}
              onClick={handleSubmit}
            >
              Send Invites
            </DsmButton>
          </Group>
        </Flex>
      </Form>
    </Formik>
  );
};
