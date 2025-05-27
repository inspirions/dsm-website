export interface AcceptInvitationPayloadType {
  userId: string;
  tenantId: string;
  invitationKey: string;
}

export type SearchParamsType = Promise<{ [key: string]: string | undefined }>;
