---
id: "util_types_constructor"
title: "Module: util/types/constructor"
sidebar_label: "util/types/constructor"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [Constructor](util_types_constructor.md#constructor)

## Type Aliases

### Constructor

Ƭ **Constructor**\<`Type`, `Parameters`\>: (...`parameters`: `Parameters`) => `Type` & \{ `[hasInstance]?`: (`value`: `unknown`) => `boolean` }

A type that represents a constructor.

#### Type parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `Type`       | `unknown`                         |
| `Parameters` | extends `unknown`[] = `unknown`[] |

#### Defined in

[util/types/constructor.ts:4](https://github.com/tensei-engine/runtime/blob/5e44862/src/main/ts/util/types/constructor.ts#L4)
