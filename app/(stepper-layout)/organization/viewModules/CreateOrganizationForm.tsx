"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, FieldProps, FieldInputProps } from "formik";

import { Avatar, Group, Stack, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmTextInput } from "@/components/DsmTextInput";
import { DsmTextAreaInput } from "@/components/DsmTextAreaInput";

import {
  ORGANIZATION_SCHEMA,
  organizationFormInitialValues,
  OrganizationType,
} from "../schema/organization";

export const CreateOrganizationForm = () => {
  const router = useRouter();
  const [organizationError, setOrganizationError] = useState("");

  const handleSubmit = (submitData: OrganizationType) => {
    console.log(submitData);
  };

  const handleChange =
    (field: FieldInputProps<OrganizationType>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field.onChange({ target: { name: field.name, value } });
      !!organizationError && setOrganizationError("");
    };

  const handleSkipClick = () => {
    router.push("/get-started");
  };

  return (
    <Formik
      initialValues={organizationFormInitialValues}
      validationSchema={ORGANIZATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form style={{ height: "inherit" }}>
        <Stack h={"inherit"} justify="space-between">
          <Stack gap="xs">
            <Stack gap={"4px"}>
              <Text size="sm" fw={500}>
                Organization Logo
              </Text>
              <Avatar size="lg" />
            </Stack>
            <Field name="name">
              {({ field, meta }: FieldProps) => (
                <DsmTextInput
                  isRequired
                  placeholder="Enter organization name"
                  label="Organization Name"
                  error={meta.error && meta.touched ? meta.error : ""}
                  {...field}
                  value={field.value}
                  onChange={handleChange(field)}
                />
              )}
            </Field>
            <Field name="slogan">
              {({ field, meta }: FieldProps) => (
                <DsmTextInput
                  placeholder="Enter organization slogan"
                  label="Organization Slogan"
                  error={meta.error && meta.touched ? meta.error : ""}
                  {...field}
                  value={field.value}
                  onChange={handleChange(field)}
                />
              )}
            </Field>
            <Field name="description">
              {({ field, meta, form }: FieldProps) => (
                <DsmTextAreaInput
                  maxRows={3}
                  label="Organization Description"
                  placeholder="Enter organization description"
                  error={meta.error && meta.touched ? meta.error : ""}
                  {...field}
                />
              )}
            </Field>

            {organizationError && (
              <Text c="red" size="md" pt={10} fw={600}>
                {organizationError}
              </Text>
            )}
          </Stack>
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
              fullWidth
              bg="blue"
              type="submit"
              iconProps={{ icon: "plus" }}
            >
              Create
            </DsmButton>
          </Group>
        </Stack>
      </Form>
    </Formik>
  );
};
