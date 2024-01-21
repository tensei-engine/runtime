/**
 * A type representing a function.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
 */
export type Callable<
  Parameters extends unknown[] = unknown[],
  ReturnType = unknown,
> = (...parameters: Parameters) => ReturnType;

export default Callable;
