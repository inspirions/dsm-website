"use client";

import { useState } from "react";
import { Formik, Form, Field, FieldProps, FieldInputProps } from "formik";

import { Avatar, Stack, Text } from "@mantine/core";

import { DsmTextInput } from "@/components/DsmTextInput";
import { DsmButton } from "@/components/DsmButton";

import {
  ORGANIZATION_SCHEMA,
  organizationFormInitialValues,
  OrganizationType,
} from "../schema/organization";
import { DsmTextAreaInput } from "@/components/DsmTextAreaInput";

export const CreateOrganizationForm = () => {
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

  return (
    <Formik
      initialValues={organizationFormInitialValues}
      validationSchema={ORGANIZATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form>
        <Stack gap="lg">
          <Text>Organization Logo</Text>
          <Avatar size="xl" />
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
            {({ field, meta }: FieldProps) => (
              <DsmTextAreaInput
                maxRows={5}
                minRows={5}
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

          <DsmButton hideIcon fullWidth bg="blue" type="submit">
            Create
          </DsmButton>
        </Stack>
      </Form>
    </Formik>
  );
};
