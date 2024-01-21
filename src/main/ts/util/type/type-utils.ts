import type { Nullish } from "./nullish";
import type { NonNullish } from "./non-nullish";
import type { PlainObject } from "./plain-object";
import type { Callable } from "../function/callable";

/**
 * A singleton for working with types.
 */
export const TypeUtils = new (class {
  /**
   * Type guard to determine if a value is an array.
   *
   * @param value Value to check.
   * @returns `true` if the value is an array, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }

  /**
   * Type guard to determine if a value is a bigint.
   *
   * @param value Value to check.
   * @returns `true` if the value is a bigint, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isBigInt(value: unknown): value is bigint {
    return typeof value === "bigint";
  }

  /**
   * Type guard to determine if a value is a boolean.
   *
   * @param value Value to check.
   * @returns `true` if the value is a boolean, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
  }

  /**
   * Type guard to determine if a value is a callable.
   *
   * @param value Value to check.
   * @returns `true` if the value is a callable, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isCallable(value: unknown): value is Callable {
    return typeof value === "function";
  }

  /**
   * Type guard to determine if a value is `null`.
   *
   * @param value Value to check.
   * @returns `true` if the value is `null`, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isNull(value: unknown): value is null {
    return value === null;
  }

  /**
   * Type guard to determine if a value is nullish.
   *
   * @param value Value to check.
   * @returns `true` if the value is a nullish, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Glossary/nullish
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isNullish(value: unknown): value is Nullish {
    return this.isNull(value) || this.isUndefined(value);
  }

  /**
   * Type guard to determine if a value is a number.
   *
   * @param value Value to check.
   * @returns `true` if the value is a number, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  /**
   * Type guard to determine if a value is an object.
   *
   * @param value Value to check.
   * @returns `true` if the value is an object, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isObject(value: NonNullish | undefined): value is object {
    return typeof value === "object";
  }

  /**
   * Type guard to determine if a value is a plain object.
   *
   * @param value Value to check.
   * @returns `true` if the value is a plain object, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isPlainObject(value: object): value is PlainObject {
    return (
      Reflect.ownKeys(
        TypeUtils.getPrototypeDescriptors({
          prototypeChain: TypeUtils.getPrototypeChain(value).slice(0, -1),
        }),
      ).length <= 1
    );
  }

  /**
   * Type guard to determine if a value is a string.
   *
   * @param value Value to check.
   * @returns `true` if the value is a string, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isString(value: unknown): value is string {
    return typeof value === "string";
  }

  /**
   * Type guard to determine if a value is a symbol.
   *
   * @param value Value to check.
   * @returns `true` if the value is a symbol, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isSymbol(value: unknown): value is symbol {
    return typeof value === "symbol";
  }

  /**
   * Type guard to determine if a value is `undefined`.
   *
   * @param value Value to check.
   * @returns `true` if the value is `undefined`, `false` otherwise.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/undefined
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   */
  isUndefined(value: unknown): value is undefined {
    return value === undefined;
  }

  /**
   * Returns the prototype chain of a target.
   *
   * @param target Target to get the prototype chain of.
   * @returns The prototype chain of the target.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
   */
  getPrototypeChain(target: object): readonly object[] {
    const prototypes = Array<object>();
    let prototype = Reflect.getPrototypeOf(target);
    while (!this.isNull(prototype)) {
      prototypes.push(prototype);
      prototype = Reflect.getPrototypeOf(prototype);
    }
    return prototypes;
  }

  /**
   * Returns the prototype descriptors of a target.
   *
   * @param input Input to get the prototype descriptors of.
   * @returns The prototype descriptors of the target.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
   */
  getPrototypeDescriptors(
    input: { target: object } | { prototypeChain: readonly object[] },
  ): PropertyDescriptorMap {
    const descriptors = Object.create(null) as PropertyDescriptorMap;
    const prototypeChain =
      "target" in input
        ? this.getPrototypeChain(input.target)
        : input.prototypeChain;
    for (const prototype of prototypeChain) {
      Object.assign(descriptors, Object.getOwnPropertyDescriptors(prototype));
    }
    return descriptors;
  }
})();

export default TypeUtils;
