---
id: "util_types_intersection"
title: "Module: util/types/intersection"
sidebar_label: "util/types/intersection"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [Intersection](util_types_intersection.md#intersection)

## Type Aliases

### Intersection

Ƭ **Intersection**\<`Types`\>: `Types` extends [infer Head, ...(infer Tail)] ? `Head` & [`Intersection`](util_types_intersection.md#intersection)\<`Tail`\> : `unknown`

A common type that represents an intersection of types.

#### Type parameters

| Name    | Type                |
| :------ | :------------------ |
| `Types` | extends `unknown`[] |

#### Defined in

[util/types/intersection.ts:4](https://github.com/tensei-engine/runtime/blob/5e44862/src/main/ts/util/types/intersection.ts#L4)
