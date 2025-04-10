export interface OrganizationType {
  id: string;
  name: string;
  creatorId: string;
  isDeleted: boolean;
  slogan: string | null;
  logoUrl: string | null;
  bannerUrl: string | null;
  websiteUrl: string | null;
  description: string | null;
}

export interface OrganizationListViewPropsType {
  organizations: OrganizationType[];
}
