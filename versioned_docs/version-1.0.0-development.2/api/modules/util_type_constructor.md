---
id: "util_type_constructor"
title: "Module: util/type/constructor"
sidebar_label: "util/type/constructor"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [Constructor](util_type_constructor.md#constructor)

## Type Aliases

### Constructor

Ƭ **Constructor**\<`Type`, `Parameters`\>: (...`parameters`: `Parameters`) => `Type` & \{ `[hasInstance]?`: (`value`: `unknown`) => `boolean`  }

A type that represents a constructor.

**`See`**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `unknown` |
| `Parameters` | extends `unknown`[] = `unknown`[] |

#### Defined in

[util/type/constructor.ts:6](https://github.com/tensei-engine/runtime/blob/bf5c6b5/src/main/ts/util/type/constructor.ts#L6)
