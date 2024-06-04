import { describe, it } from "node:test";
import { decrypt } from "../decrypt";
import { encrypted, getDecrypted } from "./fixtures";
import assert from "node:assert";

describe("decrypt", () => {
  it("SHOULD decrypt", () => {
    const actual = decrypt(encrypted);
    assert(JSON.stringify(actual) === JSON.stringify(getDecrypted()));
  });
})
