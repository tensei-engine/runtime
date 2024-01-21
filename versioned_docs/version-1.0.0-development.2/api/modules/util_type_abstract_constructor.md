---
id: "util_type_abstract_constructor"
title: "Module: util/type/abstract-constructor"
sidebar_label: "util/type/abstract-constructor"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [AbstractConstructor](util_type_abstract_constructor.md#abstractconstructor)

## Type Aliases

### AbstractConstructor

Ƭ **AbstractConstructor**\<`Type`, `Parameters`\>: (...`parameters`: `Parameters`) => `Type` & \{ `[hasInstance]?`: (`value`: `unknown`) => `boolean`  }

A type that represents an abstract constructor.

**`See`**

 - https://developer.mozilla.org/en-US/docs/Glossary/Abstraction
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `unknown` |
| `Parameters` | extends `unknown`[] = `unknown`[] |

#### Defined in

[util/type/abstract-constructor.ts:7](https://github.com/tensei-engine/runtime/blob/bf5c6b5/src/main/ts/util/type/abstract-constructor.ts#L7)
