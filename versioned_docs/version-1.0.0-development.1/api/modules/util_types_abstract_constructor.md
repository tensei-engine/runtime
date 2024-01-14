---
id: "util_types_abstract_constructor"
title: "Module: util/types/abstract-constructor"
sidebar_label: "util/types/abstract-constructor"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [AbstractConstructor](util_types_abstract_constructor.md#abstractconstructor)

## Type Aliases

### AbstractConstructor

Ƭ **AbstractConstructor**\<`Type`, `Parameters`\>: (...`parameters`: `Parameters`) => `Type` & \{ `[hasInstance]?`: (`value`: `unknown`) => `boolean` }

A type that represents an abstract constructor.

#### Type parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `Type`       | `unknown`                         |
| `Parameters` | extends `unknown`[] = `unknown`[] |

#### Defined in

[util/types/abstract-constructor.ts:4](https://github.com/tensei-engine/runtime/blob/5e44862/src/main/ts/util/types/abstract-constructor.ts#L4)
