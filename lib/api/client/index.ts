import wretch from "wretch";

export const api = wretch()
  .headers({
    "Content-Type": "application/json",
  })
  .catcher(401, () => {
    throw new Error("Unauthorized");
  })
  .catcher(403, () => {
    throw new Error("Forbidden");
  })
  .catcher(404, () => {
    throw new Error("Not Found");
  });
