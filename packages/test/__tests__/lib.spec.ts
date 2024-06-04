import { describe, it } from "node:test";
import * as assert from "node:assert";
import { fetchFuelPrices } from "lib-racv-http-client";

describe("fetchFuelPrices", () => {
  it('should return expected data ', async () => {
    const actual = await fetchFuelPrices();
    assert.ok(actual);
    assert.ok(Object.keys(actual).length > 0);
  });
})
