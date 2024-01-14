import type { Intersection } from "../util/types/intersection";
import type { AbstractConstructor } from "../util/types/abstract-constructor";

/**
 * Registers the decorated class as an instance of the specified super classes.
 *
 * @param superConstructors Super classes to register the decorated class as an instance of.
 * @returns Decorator function.
 */
export function metatag<
  SuperTypes extends unknown[],
  SuperConstructorTypes extends {
    [Index in keyof SuperTypes]: AbstractConstructor<SuperTypes[Index]>;
  },
>(...superConstructors: SuperConstructorTypes) {
  return function <
    Type extends Intersection<SuperTypes>,
    Parameters extends unknown[],
    ConstructorType extends AbstractConstructor<Type, Parameters>,
  >(constructor: ConstructorType, _?: ClassDecoratorContext<ConstructorType>) {
    superConstructors.forEach((superConstructor) => {
      const hasInstancePropertyDescriptor = Reflect.getOwnPropertyDescriptor(
        superConstructor,
        Symbol.hasInstance,
      );

      const value = hasInstancePropertyDescriptor?.value;
      const writable = hasInstancePropertyDescriptor?.writable ?? false;
      const enumerable = hasInstancePropertyDescriptor?.enumerable ?? false;
      const configurable = hasInstancePropertyDescriptor?.configurable ?? true;

      Reflect.defineProperty(superConstructor, Symbol.hasInstance, {
        value: function (object: unknown): boolean {
          return value?.(object) === true || object instanceof constructor;
        },
        configurable,
        enumerable,
        writable,
      });
    });
  };
}

export default metatag;
