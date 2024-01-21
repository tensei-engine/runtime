/**
 * A common type that represents an intersection of types.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
 */
export type Intersection<Types extends unknown[]> = Types extends [
  infer Head,
  ...infer Tail,
]
  ? Head & Intersection<Tail>
  : unknown;

export default Intersection;
