import {describe, it} from "node:test";
import assert from "node:assert";
import { randomStr, sum } from "./index.ts"

describe("#randomStr", () => {
    it("Should generate a random string", () => {
        assert(randomStr().length === 8);
        
    });
    it("Should sum numbers", () => {
        assert.strictEqual(sum(1,2),3);
    });
});