/**
 * A type that represents a constructor.
 */
export type Constructor<
  Type = unknown,
  Parameters extends unknown[] = unknown[],
> = (new (...parameters: Parameters) => Type) & {
  [Symbol.hasInstance]?: (value: unknown) => boolean;
};

export default Constructor;
