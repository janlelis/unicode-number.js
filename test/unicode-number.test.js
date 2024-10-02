import { describe, it, expect } from "vitest";
import {
  unicodeNumber,
  unicodeNumberString,
  listUnicodeNumberCharacters,
} from "../src/index.js";

describe("unicodeNumber(char)", () => {
  it("will return number values of single Unicode characters", () => {
    expect(unicodeNumber("1")).toBe(1);
    expect(unicodeNumber("Ⅷ")).toBe(8);
    expect(unicodeNumber("⓳")).toBe(19);
    expect(unicodeNumber("𖭡")).toBe(1000000000000);
  });

  it("works with numbers from recent Unicode versions", () => {
    expect(unicodeNumber("𝋀")).toBe(0); // Unicode 15 (2022)
    expect(unicodeNumber("𜳷")).toBe(7); // Unicode 16 (2024)
  });

  it("converts fractions to JavaScript numbers", () => {
    expect(unicodeNumber("¾")).toBe(0.75);
    expect(unicodeNumber("༳")).toBe(-0.5);
  });

  it("returns undefined if no numerical value found / multiple Unicode chars parsed", () => {
    expect(unicodeNumber("A")).toBe(undefined);
    expect(unicodeNumber("12")).toBe(undefined);
  });
});

describe("unicodeNumberString(char)", () => {
  it("will return number values of single Unicode characters as strings", () => {
    expect(unicodeNumberString("1")).toBe("1");
    expect(unicodeNumberString("Ⅷ")).toBe("8");
    expect(unicodeNumberString("⓳")).toBe("19");
    expect(unicodeNumberString("𖭡")).toBe("1000000000000");
  });

  it("will not convert fractions", () => {
    expect(unicodeNumberString("¾")).toBe("3/4");
    expect(unicodeNumberString("༳")).toBe("-1/2");
  });
});

describe("listUnicodeNumberCharacters()", () => {
  it("will return all characters that have an numerical value", () => {
    expect(listUnicodeNumberCharacters()[0]).toBe("0");
    expect(listUnicodeNumberCharacters().length).toBe(2064);
  });
});
