import { expect } from "chai";
import { describe, it } from "mocha";

class TestNonPlainObject {
  test(): void {
    /* */
  }
}

class TestPlainObject {
  readonly size = 0;
}

class TestPrototype extends TestNonPlainObject {
  other(): void {
    /* */
  }
}

function test() {
  /* */
}

describe("TypeUtils", () => {
  describe("#isArray()", () => {
    it("should return true for arrays", () => {
      expect(TypeUtils.isArray([])).to.be.true;
    });

    it("should return false for non-arrays", () => {
      expect(TypeUtils.isArray(1)).to.be.false;
      expect(TypeUtils.isArray(BigInt(1))).to.be.false;
      expect(TypeUtils.isArray("a")).to.be.false;
      expect(TypeUtils.isArray(true)).to.be.false;
      expect(TypeUtils.isArray(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isArray({})).to.be.false;
      expect(TypeUtils.isArray(null)).to.be.false;
      expect(TypeUtils.isArray(undefined)).to.be.false;
      expect(TypeUtils.isArray(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isArray(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isArray(test)).to.be.false;
    });
  });

  describe("#isBigInt()", () => {
    it("should return true for bigints", () => {
      expect(TypeUtils.isBigInt(BigInt(1))).to.be.true;
    });

    it("should return false for non-bigints", () => {
      expect(TypeUtils.isBigInt(1)).to.be.false;
      expect(TypeUtils.isBigInt("a")).to.be.false;
      expect(TypeUtils.isBigInt(true)).to.be.false;
      expect(TypeUtils.isBigInt([])).to.be.false;
      expect(TypeUtils.isBigInt(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isBigInt({})).to.be.false;
      expect(TypeUtils.isBigInt(null)).to.be.false;
      expect(TypeUtils.isBigInt(undefined)).to.be.false;
      expect(TypeUtils.isBigInt(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isBigInt(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isBigInt(test)).to.be.false;
    });
  });

  describe("#isBoolean()", () => {
    it("should return true for booleans", () => {
      expect(TypeUtils.isBoolean(true)).to.be.true;
    });

    it("should return false for non-booleans", () => {
      expect(TypeUtils.isBoolean(1)).to.be.false;
      expect(TypeUtils.isBoolean(BigInt(1))).to.be.false;
      expect(TypeUtils.isBoolean("a")).to.be.false;
      expect(TypeUtils.isBoolean([])).to.be.false;
      expect(TypeUtils.isBoolean(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isBoolean({})).to.be.false;
      expect(TypeUtils.isBoolean(null)).to.be.false;
      expect(TypeUtils.isBoolean(undefined)).to.be.false;
      expect(TypeUtils.isBoolean(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isBoolean(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isBoolean(test)).to.be.false;
    });
  });

  describe("#isCallable()", () => {
    it("should return true for callables", () => {
      expect(TypeUtils.isCallable(test)).to.be.true;
    });

    it("should return false for non-callables", () => {
      expect(TypeUtils.isCallable(1)).to.be.false;
      expect(TypeUtils.isCallable(BigInt(1))).to.be.false;
      expect(TypeUtils.isCallable("a")).to.be.false;
      expect(TypeUtils.isCallable(true)).to.be.false;
      expect(TypeUtils.isCallable([])).to.be.false;
      expect(TypeUtils.isCallable(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isCallable({})).to.be.false;
      expect(TypeUtils.isCallable(null)).to.be.false;
      expect(TypeUtils.isCallable(undefined)).to.be.false;
      expect(TypeUtils.isCallable(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isCallable(new TestPlainObject())).to.be.false;
    });
  });

  describe("#isNull()", () => {
    it("should return true for null", () => {
      expect(TypeUtils.isNull(null)).to.be.true;
    });

    it("should return false for non-null", () => {
      expect(TypeUtils.isNull(1)).to.be.false;
      expect(TypeUtils.isNull(BigInt(1))).to.be.false;
      expect(TypeUtils.isNull("a")).to.be.false;
      expect(TypeUtils.isNull(true)).to.be.false;
      expect(TypeUtils.isNull([])).to.be.false;
      expect(TypeUtils.isNull(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isNull({})).to.be.false;
      expect(TypeUtils.isNull(undefined)).to.be.false;
      expect(TypeUtils.isNull(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isNull(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isNull(test)).to.be.false;
    });
  });

  describe("#isNullish()", () => {
    it("should return true for nullish", () => {
      expect(TypeUtils.isNullish(null)).to.be.true;
      expect(TypeUtils.isNullish(undefined)).to.be.true;
    });

    it("should return false for non-nullish", () => {
      expect(TypeUtils.isNullish(1)).to.be.false;
      expect(TypeUtils.isNullish(BigInt(1))).to.be.false;
      expect(TypeUtils.isNullish("a")).to.be.false;
      expect(TypeUtils.isNullish(true)).to.be.false;
      expect(TypeUtils.isNullish([])).to.be.false;
      expect(TypeUtils.isNullish(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isNullish({})).to.be.false;
      expect(TypeUtils.isNullish(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isNullish(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isNullish(test)).to.be.false;
    });
  });

  describe("#isNumber()", () => {
    it("should return true for numbers", () => {
      expect(TypeUtils.isNumber(1)).to.be.true;
    });

    it("should return false for non-numbers", () => {
      expect(TypeUtils.isNumber(BigInt(1))).to.be.false;
      expect(TypeUtils.isNumber("a")).to.be.false;
      expect(TypeUtils.isNumber(true)).to.be.false;
      expect(TypeUtils.isNumber([])).to.be.false;
      expect(TypeUtils.isNumber(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isNumber({})).to.be.false;
      expect(TypeUtils.isNumber(null)).to.be.false;
      expect(TypeUtils.isNumber(undefined)).to.be.false;
      expect(TypeUtils.isNumber(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isNumber(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isNumber(test)).to.be.false;
    });
  });

  describe("#isObject()", () => {
    it("should return true for objects", () => {
      expect(TypeUtils.isObject({})).to.be.true;
      expect(TypeUtils.isObject(new TestNonPlainObject())).to.be.true;
      expect(TypeUtils.isObject(new TestPlainObject())).to.be.true;
      expect(TypeUtils.isObject([])).to.be.true;
    });

    it("should return false for non-objects", () => {
      expect(TypeUtils.isObject(1)).to.be.false;
      expect(TypeUtils.isObject(BigInt(1))).to.be.false;
      expect(TypeUtils.isObject("a")).to.be.false;
      expect(TypeUtils.isObject(true)).to.be.false;
      expect(TypeUtils.isObject(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isObject(undefined)).to.be.false;
      expect(TypeUtils.isObject(test)).to.be.false;
    });
  });

  describe("#isPlainObject()", () => {
    it("should return true for plain objects", () => {
      expect(TypeUtils.isPlainObject({})).to.be.true;
      expect(TypeUtils.isPlainObject(new TestPlainObject())).to.be.true;
    });

    it("should return false for non-plain objects", () => {
      expect(TypeUtils.isPlainObject(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isPlainObject([])).to.be.false;
    });
  });

  describe("#isString()", () => {
    it("should return true for strings", () => {
      expect(TypeUtils.isString("a")).to.be.true;
    });

    it("should return false for non-strings", () => {
      expect(TypeUtils.isString(1)).to.be.false;
      expect(TypeUtils.isString(BigInt(1))).to.be.false;
      expect(TypeUtils.isString(true)).to.be.false;
      expect(TypeUtils.isString([])).to.be.false;
      expect(TypeUtils.isString(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isString({})).to.be.false;
      expect(TypeUtils.isString(null)).to.be.false;
      expect(TypeUtils.isString(undefined)).to.be.false;
      expect(TypeUtils.isString(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isString(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isString(test)).to.be.false;
    });
  });

  describe("#isSymbol()", () => {
    it("should return true for symbols", () => {
      expect(TypeUtils.isSymbol(Symbol.hasInstance)).to.be.true;
    });

    it("should return false for non-symbols", () => {
      expect(TypeUtils.isSymbol(1)).to.be.false;
      expect(TypeUtils.isSymbol(BigInt(1))).to.be.false;
      expect(TypeUtils.isSymbol("a")).to.be.false;
      expect(TypeUtils.isSymbol(true)).to.be.false;
      expect(TypeUtils.isSymbol([])).to.be.false;
      expect(TypeUtils.isSymbol({})).to.be.false;
      expect(TypeUtils.isSymbol(null)).to.be.false;
      expect(TypeUtils.isSymbol(undefined)).to.be.false;
      expect(TypeUtils.isSymbol(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isSymbol(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isSymbol(test)).to.be.false;
    });
  });

  describe("#isUndefined()", () => {
    it("should return true for undefined", () => {
      expect(TypeUtils.isUndefined(undefined)).to.be.true;
    });

    it("should return false for non-undefined", () => {
      expect(TypeUtils.isUndefined(1)).to.be.false;
      expect(TypeUtils.isUndefined(BigInt(1))).to.be.false;
      expect(TypeUtils.isUndefined("a")).to.be.false;
      expect(TypeUtils.isUndefined(true)).to.be.false;
      expect(TypeUtils.isUndefined([])).to.be.false;
      expect(TypeUtils.isUndefined(Symbol.hasInstance)).to.be.false;
      expect(TypeUtils.isUndefined({})).to.be.false;
      expect(TypeUtils.isUndefined(null)).to.be.false;
      expect(TypeUtils.isUndefined(new TestNonPlainObject())).to.be.false;
      expect(TypeUtils.isUndefined(new TestPlainObject())).to.be.false;
      expect(TypeUtils.isUndefined(test)).to.be.false;
    });
  });

  describe("#getPrototypeChain()", () => {
    it("should return the prototype chain", () => {
      expect(TypeUtils.getPrototypeChain(new TestPrototype())).to.deep.equal([
        TestPrototype.prototype,
        TestNonPlainObject.prototype,
        Object.prototype,
      ]);
    });
  });

  describe("#getPrototypeDescriptors()", () => {
    it("should return the prototype descriptors from prototype chain", () => {
      const propertyDescriptors = TypeUtils.getPrototypeDescriptors({
        target: new TestPrototype(),
      });
      expect(propertyDescriptors).to.have.property("other").deep.equal({
        configurable: true,
        enumerable: true,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        value: TestPrototype.prototype.other,
        writable: true,
      });
      expect(propertyDescriptors).to.have.property("test").deep.equal({
        configurable: true,
        enumerable: true,
        // eslint-disable-next-line @typescript-eslint/unbound-method
        value: TestNonPlainObject.prototype.test,
        writable: true,
      });
      expect(propertyDescriptors)
        .to.have.property("toLocaleString")
        .deep.equal({
          configurable: true,
          enumerable: false,
          // eslint-disable-next-line @typescript-eslint/unbound-method
          value: Object.prototype.toLocaleString,
          writable: true,
        });
    });
  });
});

import { TypeUtils } from "../../../main/ts/util/type/type-utils";
