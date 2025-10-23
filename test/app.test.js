import { describe, it, expect } from "vitest";
import { sum } from "../src/index.js";

describe("sum()", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 6)).toBe(8);
    expect(sum(-1, 5)).toBe(4);

  });
});
