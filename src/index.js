import UNICODE_DATA_NUMERIC_VALUE from "./numeric_value.js";

const { INDEX } = UNICODE_DATA_NUMERIC_VALUE;

/**
 * Returns the numeric value of a Unicode character
 * Javascript's number type is used, so fractions might
 * not be represented correctly. Use unicodeNumberString
 * function to get string values which contain fractions
 * if the number is rational.
 *
 * If no value is assigned, returns unassigned
 */
export function unicodeNumber(char) {
  const res = INDEX[char];

  if (typeof res === "string") {
    const [a, b] = res.split("/").map((n) => parseInt(n, 10));
    return a / b;
  }

  return res;
}

/**
 * Returns a string representation of the number
 * Use this if you want to represent fractions properly
 */
export function unicodeNumberString(char) {
  const res = INDEX[char];
  if (res === undefined) {
    return undefined;
  }

  return `${res}`;
}

/**
 * Lists all Unicode characters that have a numeric value assigned
 */
export function listUnicodeNumberCharacters() {
  return Object.keys(INDEX).sort();
}
