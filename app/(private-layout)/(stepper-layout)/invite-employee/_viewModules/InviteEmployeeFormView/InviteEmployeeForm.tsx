"use client";

import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { Divider, Flex, Group, Select, Stack, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmIconButton } from "@/components/DsmIconButton";
import { DsmInfoAvatar } from "@/components/DsmInfoAvatar";
import { DsmTextInputWithSelect } from "@/components/DsmTextInputWithSelect";
import { DummyAvatarGroup } from "@/components/DummyAvatarGroup";

import { useUserInfoContext } from "@/providers/UserInfoProvider";

import { handleOrganizationNav } from "@/app/(private-layout)/get-started/actions";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { DSM_APP_URL, USER_ROLE_OPTIONS } from "@/constants/commons";
import { INVITE_EMPLOYEE_PAGE } from "@/constants/dataTestId";

import {
  INVITE_EMPLOYEE_SCHEMA,
  inviteEmployeeFormInitialValues,
  InviteEmployeeType,
} from "../../_schema/InviteEmployee";

import { InviteEmployeeFormPropsType } from "../../types";

import classes from "./index.module.css";

const textInputStyles = {
  input: {
    color: "#fff",
    backgroundColor: "#333",
  },
};
const dropDownStyles = {
  dropdown: {
    backgroundColor: "#444",
  },
};

export const InviteEmployeeForm = ({
  onSubmit,
  roles,
}: InviteEmployeeFormPropsType) => {
  const { userId } = useUserInfoContext();
  const searchParams = useSearchParams();
  const orgId = searchParams.get("orgId") || "";

  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const [userType, setUserType] = useState("employee");
  const [invites, setInvites] = useState<InviteEmployeeType[]>([]);

  const useUserRoleOptions = () => {
    return roles.map((role) => ({
      label: role.name,
      value: role.name.toLowerCase(),
    }));
  };

  const handleSubmit = () => {
    formSubmit(onSubmit(invites, orgId));
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
    window.location.href = DSM_APP_URL;
  };

  return (
    <>
      <Stack align="center" gap={8}>
        <DummyAvatarGroup />
        <Stack align="center" gap={2}>
          <Text fw={700}>Invite your team</Text>
          <Text c="dimmed" size="sm">
            For your organization, Invite you employees to join your team
          </Text>
        </Stack>
      </Stack>
      <Formik
        initialValues={inviteEmployeeFormInitialValues}
        validationSchema={INVITE_EMPLOYEE_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Form
          style={{ height: "100%" }}
          data-testid={INVITE_EMPLOYEE_PAGE.FORM}
        >
          <Flex h="100%" direction="column" justify="space-between">
            <Flex direction="column" gap="md">
              <Field name="to">
                {({ field, meta, form }: FieldProps) => (
                  <DsmTextInputWithSelect
                    styles={{
                      ...textInputStyles,
                    }}
                    placeholder="Email to send invite"
                    helperText="Press Enter to add email to the invitation list"
                    error={meta.error && meta.touched ? meta.error : undefined}
                    name={field.name}
                    value={field.value}
                    isDisabled={!orgId}
                    onChange={field.onChange}
                    onKeyDown={handleKeyDown(form)}
                    selectProps={{
                      styles: {
                        ...textInputStyles,
                        ...dropDownStyles,
                      },
                      placeholder: "Pick Role",
                      data: useUserRoleOptions(),
                      value: userType,
                      allowDeselect: false,
                      onChange: handleUserTypeChange,
                    }}
                  />
                )}
              </Field>
              {!orgId && <Text c="red">Organization not found</Text>}
              {!!invites.length && (
                <>
                  <Divider style={{ borderColor: "#f1f1f1" }} />
                  <Flex direction="column" gap="sm">
                    <Text lh={1} fw="bold">
                      Employees to Invite
                    </Text>
                    <Flex direction="column" gap="4px">
                      {invites.map((indvEmail) => (
                        <Flex key={indvEmail.to} justify="space-between">
                          <DsmInfoAvatar
                            label={indvEmail.to}
                            labelProps={{ tt: "lowercase", c: "#fff" }}
                            avatarProps={{ size: 32, radius: "lg" }}
                          />
                          <Flex gap="xs" align="center">
                            <Select
                              w={100}
                              size="xs"
                              defaultValue="User"
                              allowDeselect={false}
                              placeholder="Pick Role"
                              checkIconPosition="right"
                              data={useUserRoleOptions()}
                              value={indvEmail.userType}
                              onChange={handleChangeRole(indvEmail.to)}
                              styles={{ ...textInputStyles, ...dropDownStyles }}
                              classNames={{
                                option: classes.selectOption,
                                options: classes.selectOptions,
                              }}
                            />
                            <DsmIconButton
                              variant="subtle"
                              iconProps={{ icon: "delete", color: "red" }}
                              tooltipProps={{ label: "Remove" }}
                              onClick={handleRemoveEmail(indvEmail.to)}
                            />
                          </Flex>
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>
                  <Divider
                    style={{ borderColor: "#f1f1f1", paddingTop: "8px" }}
                  />
                </>
              )}
            </Flex>
            <Group justify="flex-end" pb="2px">
              <DsmButton
                hideIcon
                disabled={!orgId}
                size="xs"
                color="white"
                variant="subtle"
                onClick={handleSkipClick}
              >
                Skip for now
              </DsmButton>
              <DsmButton
                size="xs"
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
    </>
  );
};
