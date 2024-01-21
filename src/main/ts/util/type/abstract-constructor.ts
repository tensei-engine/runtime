/**
 * A type that represents an abstract constructor.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Abstraction
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */
export type AbstractConstructor<
  Type = unknown,
  Parameters extends unknown[] = unknown[],
> = (abstract new (...parameters: Parameters) => Type) & {
  [Symbol.hasInstance]?: (value: unknown) => boolean;
};

export default AbstractConstructor;
