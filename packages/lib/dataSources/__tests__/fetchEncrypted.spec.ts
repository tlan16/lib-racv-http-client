import { describe, it } from "node:test";
import { fetchEncrypted } from "../fetchEncrypted";
import assert from "node:assert";

describe('fetchEncrypted', () => {
  it("SHOULD fetch encrypted data", async () => {
    const actual = await fetchEncrypted();
    assert(actual.trim().length > 0, "Expected data to be fetched");
  });
});
