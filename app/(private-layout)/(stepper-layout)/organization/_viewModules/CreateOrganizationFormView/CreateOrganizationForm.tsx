"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, FieldProps, FieldInputProps } from "formik";

import { Group, Stack, Text } from "@mantine/core";

import { DsmButton } from "@/components/DsmButton";
import { DsmTextInput } from "@/components/DsmTextInput";
import { DsmTextAreaInput } from "@/components/DsmTextAreaInput";

import { useUserInfoContext } from "@/providers/UserInfoProvider";

import { useSubmitWithLoading } from "@/hooks/useSubmitWithLoading";

import { routes } from "@/constants/routeConstants";
import { ORGANIZATION_PAGE } from "@/constants/dataTestId";

import {
  ORGANIZATION_SCHEMA,
  organizationFormInitialValues,
  OrganizationType,
} from "../../_schema/organization";

import { CreateOrganizationFormPropsType } from "../../types";
import { DsmProfileImgUploader } from "@/components/DsmProfileImgUploader";
import { STORAGE_FOLDER } from "@/constants/commons";
import { UploadedFileType } from "@/components/DsmProfileImgUploader/types";

import classes from "./index.module.css";

const { GET_STARTED } = routes;
const { ORGANIZATION_LOGO } = STORAGE_FOLDER;

export const CreateOrganizationForm = ({
  onSubmit,
}: CreateOrganizationFormPropsType) => {
  const router = useRouter();

  const { userId } = useUserInfoContext();

  const [organizationError, setOrganizationError] = useState("");
  const { isSubmitting, formSubmit } = useSubmitWithLoading();

  const handleSubmit = (submitData: OrganizationType) => {
    const payload = { ...submitData, creatorId: userId };
    formSubmit(onSubmit(payload));
  };

  const handleLogoUpload =
    (field: FieldInputProps<OrganizationType>) => (file: UploadedFileType) => {
      field.onChange({ target: { name: field.name, value: file.url } });
    };

  const handleChange =
    (field: FieldInputProps<OrganizationType>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      field.onChange({ target: { name: field.name, value } });
      !!organizationError && setOrganizationError("");
    };

  const handleSkipClick = () => {
    sessionStorage.clear();
    router.push(GET_STARTED);
  };

  return (
    <Formik
      initialValues={organizationFormInitialValues}
      validationSchema={ORGANIZATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <Form style={{ height: "inherit" }} data-testid={ORGANIZATION_PAGE.FORM}>
        <Stack h={"inherit"} justify="space-between">
          <Stack gap="sm">
            <Stack gap={"4px"} justify="flex-start">
              <Text size="sm" fw={500}>
                Organization Logo
              </Text>
              <Field name="logoUrl">
                {({ field, meta }: FieldProps) => (
                  <DsmProfileImgUploader
                    styles={{
                      root: {
                        backgroundColor: "#333",
                      },
                    }}
                    value={field.value}
                    wrapperProps={{ mx: 0 }}
                    storageFolder={ORGANIZATION_LOGO}
                    error={meta.error && meta.touched ? meta.error : ""}
                    onChange={handleLogoUpload(field)}
                  />
                )}
              </Field>
            </Stack>
            <Field name="name">
              {({ field, meta }: FieldProps) => (
                <DsmTextInput
                  className={classes.formInput}
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
                  className={classes.formInput}
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
                  className={classes.textAreaInput}
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
              variant="transparent"
              onClick={handleSkipClick}
            >
              Skip for now
            </DsmButton>
            <DsmButton
              size="xs"
              fullWidth
              type="submit"
              loading={isSubmitting}
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
