/**
 * A common type that represents an intersection of types.
 */
export type Intersection<Types extends unknown[]> = Types extends [
  infer Head,
  ...infer Tail,
]
  ? Head & Intersection<Tail>
  : unknown;

export default Intersection;
