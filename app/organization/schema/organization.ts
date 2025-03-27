import * as Yup from "yup";

export const ORGANIZATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required("Organization name is required").default(""),
  description: Yup.string().optional(),
  creatorId: Yup.string().optional(),
  slogan: Yup.string().optional(),
  bannerUrl: Yup.string().optional(),
  logoUrl: Yup.string().optional(),
  websiteUrl: Yup.string().optional(),
});

export type OrganizationType = Yup.InferType<typeof ORGANIZATION_SCHEMA>;

export const organizationFormInitialValues = ORGANIZATION_SCHEMA.cast({});
