import { expect } from "chai";
import { describe, it } from "mocha";
import { metatag } from "../../../main/ts/core/metatag";

abstract class IBase {
  abstract readonly size: number;
}

abstract class ITest {
  abstract test(): void;
}

@metatag(IBase)
abstract class IList implements IBase {
  abstract clear(): void;

  abstract readonly size: number;
}

@metatag(IList, ITest)
class List implements IList, ITest {
  readonly size = 0;

  clear(): void {
    /* */
  }

  test(): void {
    /* */
  }
}

@metatag(ITest)
class Test implements ITest {
  test(): void {
    /* */
  }
}

describe("#metatag()", () => {
  it("should fail with numeric types", () => {
    expect(1).to.not.be.instanceOf(IBase);
    expect(2).to.not.be.instanceOf(IList);
    expect(3).to.not.be.instanceOf(ITest);
  });

  it("should fail with string types", () => {
    expect("a").to.not.be.instanceOf(IBase);
    expect("b").to.not.be.instanceOf(IList);
    expect("c").to.not.be.instanceOf(ITest);
  });

  it("should fail with boolean types", () => {
    expect(true).to.not.be.instanceOf(IBase);
    expect(false).to.not.be.instanceOf(IList);
    expect(true).to.not.be.instanceOf(ITest);
  });

  it("should fail with symbolic types", () => {
    expect(Symbol.hasInstance).to.not.be.instanceOf(IBase);
    expect(Symbol.isConcatSpreadable).to.not.be.instanceOf(IList);
    expect(Symbol()).to.not.be.instanceOf(ITest);
  });

  it("should fail with integer types", () => {
    expect(BigInt(1)).to.not.be.instanceOf(IBase);
    expect(BigInt(2)).to.not.be.instanceOf(IList);
    expect(BigInt(3)).to.not.be.instanceOf(ITest);
  });

  it("should fail with nullable types", () => {
    expect(null).to.not.be.instanceOf(IBase);
    expect(undefined).to.not.be.instanceOf(IList);
    expect(null).to.not.be.instanceOf(ITest);
  });

  it("should succeed with list", () => {
    const list = new List();
    expect(list).to.be.instanceOf(IBase);
    expect(list).to.be.instanceOf(IList);
    expect(list).to.be.instanceOf(ITest);
  });

  it("should partially succeed with test", () => {
    const test = new Test();
    expect(test).to.not.be.instanceOf(IBase);
    expect(test).to.not.be.instanceOf(IList);
    expect(test).to.be.instanceOf(ITest);
  });
});
