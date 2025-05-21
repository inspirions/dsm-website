/**
 * Combines multiple name parts into a single full name string.
 * Filters out any undefined, null, or empty string values before joining.
 *
 * @param {...(string | undefined | null)} name - Variable number of name parts to combine
 * @returns {string} The combined full name with parts joined by spaces
 *
 * @example
 * getFullName("John", "Doe") // returns "John Doe"
 * getFullName("John", null, "Doe") // returns "John Doe"
 * getFullName("John", undefined, "Doe") // returns "John Doe"
 */
export const getFullName = (...name: (string | undefined | null)[]) => {
  const fullName = name.filter(Boolean).join(" ");
  return fullName;
};
