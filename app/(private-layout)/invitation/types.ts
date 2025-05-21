export interface AcceptInvitationPayloadType {
  tenantId: string;
  userId: string;
}

export type SearchParamsType = Promise<{ [key: string]: string | undefined }>;
