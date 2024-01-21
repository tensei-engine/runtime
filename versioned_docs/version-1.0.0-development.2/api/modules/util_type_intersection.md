---
id: "util_type_intersection"
title: "Module: util/type/intersection"
sidebar_label: "util/type/intersection"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [Intersection](util_type_intersection.md#intersection)

## Type Aliases

### Intersection

Ƭ **Intersection**\<`Types`\>: `Types` extends [infer Head, ...(infer Tail)] ? `Head` & [`Intersection`](util_type_intersection.md#intersection)\<`Tail`\> : `unknown`

A common type that represents an intersection of types.

**`See`**

https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends `unknown`[] |

#### Defined in

[util/type/intersection.ts:6](https://github.com/tensei-engine/runtime/blob/bf5c6b5/src/main/ts/util/type/intersection.ts#L6)
