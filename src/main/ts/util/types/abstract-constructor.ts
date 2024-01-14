/**
 * A type that represents an abstract constructor.
 */
export type AbstractConstructor<
  Type = unknown,
  Parameters extends unknown[] = unknown[],
> = (abstract new (...parameters: Parameters) => Type) & {
  [Symbol.hasInstance]?: (value: unknown) => boolean;
};

export default AbstractConstructor;
