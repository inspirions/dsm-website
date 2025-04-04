"use server";

export const login = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);
};
