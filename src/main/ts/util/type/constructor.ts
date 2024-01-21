/**
 * A type that represents a constructor.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
 */
export type Constructor<
  Type = unknown,
  Parameters extends unknown[] = unknown[],
> = (new (...parameters: Parameters) => Type) & {
  [Symbol.hasInstance]?: (value: unknown) => boolean;
};

export default Constructor;
