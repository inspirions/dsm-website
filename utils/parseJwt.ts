export const dsmParseJwt = (token: string) => {
  try {
    const payloadBase64 = token.split(".")[1];
    const decodedPayload = atob(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    throw new Error("Failed to decode JWT");
  }
};
