export const dsmParseJwt = (token: string) => {
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Failed to decode JWT";
    throw new Error(errorMsg);
  }
};
