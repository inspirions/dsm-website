"use client";

import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FieldInputProps,
  FormikProps,
} from "formik";

import { Divider, Flex, Select, Text } from "@mantine/core";

import { DsmIconButton } from "@/components/DsmIconButton";
import { DsmTextInputWithSelect } from "@/components/DsmTextInputWithSelect";

import {
  INVITE_EMPLOYEE_SCHEMA,
  inviteEmployeeFormInitialValues,
  InviteEmployeeType,
} from "../schema/InviteEmployee";
import { DsmInfoAvatar } from "@/components/DsmInfoAvatar";

const selectData = ["User", "Admin"];

export const InviteEmployeeForm = () => {
  const [userType, setUserType] = useState<string | null>("User");
  const [emails, setEmails] = useState<string[]>([]);
  // const [employeeToInvite, setEmployeeToInvite] = useState([]);

  const handleSubmit = (submitData: InviteEmployeeType) => {
    console.log(submitData);
  };

  const handleChange =
    (field: FieldInputProps<InviteEmployeeType>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field.onChange({ target: { name: field.name, value: [value] } });
    };

  const handleKeyDown =
    (form: FormikProps<InviteEmployeeType>) =>
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        form.setTouched({ to: true });
        if (form.isValid) {
          setEmails([...emails, event.currentTarget.value]);
          form.resetForm();
        }
      }
    };

  const handleRemoveEmail = (emailToRemove: string) => () => {
    const tempEmails = emails.filter(
      (indvEmail) => indvEmail !== emailToRemove
    );
    setEmails(tempEmails);
  };

  return (
    <Formik
      initialValues={inviteEmployeeFormInitialValues}
      validationSchema={INVITE_EMPLOYEE_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <Flex direction={"column"} gap={"md"}>
          <Field name="to">
            {({ field, meta, form }: FieldProps) => (
              <DsmTextInputWithSelect
                label="Invite By Email"
                placeholder="Email"
                error={meta.error && meta.touched ? meta.error : undefined}
                {...field}
                onKeyDown={handleKeyDown(form)}
                onChange={handleChange(field)}
                selectProps={{
                  placeholder: "Pick Role",
                  data: selectData,
                  value: userType,
                  allowDeselect: false,
                  onChange: setUserType,
                }}
              />
            )}
          </Field>
          {!!emails.length && (
            <>
              <Divider style={{ borderColor: "#f1f1f1" }} />
              <Flex direction="column" gap={"sm"}>
                <Text lh={1} fw={"bold"}>
                  Employees to Invite
                </Text>
                <Flex direction="column" gap={"4px"}>
                  {emails.map((indvEmail) => (
                    <Flex key={indvEmail} justify="space-between">
                      <DsmInfoAvatar
                        label={indvEmail}
                        avatarProps={{ size: 32, radius: "lg" }}
                      />
                      <Flex gap={"xs"} align={"center"}>
                        <Select
                          w={100}
                          size="xs"
                          defaultValue="User"
                          allowDeselect={false}
                          placeholder="Pick Role"
                          data={selectData}
                        />
                        <DsmIconButton
                          variant="subtle"
                          iconProps={{ icon: "trash" }}
                          tooltipProps={{ label: "Remove" }}
                          onClick={handleRemoveEmail(indvEmail)}
                        />
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </>
          )}
        </Flex>
      </Form>
    </Formik>
  );
};
