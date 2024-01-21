---
id: "core_metatag"
title: "Module: core/metatag"
sidebar_label: "core/metatag"
sidebar_position: 0
custom_edit_url: null
---

## References

### default

Renames and re-exports [metatag](core_metatag.md#metatag)

## Functions

### metatag

▸ **metatag**\<`SuperTypes`, `SuperConstructorTypes`\>(`...superConstructors`): \<Type, Parameters, ConstructorType\>(`constructor`: `ConstructorType`, `_?`: `ClassDecoratorContext`\<`ConstructorType`\>) => `void`

Registers the decorated class as an instance of the specified super classes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SuperTypes` | extends `unknown`[] |
| `SuperConstructorTypes` | extends \{ [Index in string \| number \| symbol]: AbstractConstructor\<SuperTypes[Index]\> } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...superConstructors` | `SuperConstructorTypes` | Super classes to register the decorated class as an instance of. |

#### Returns

`fn`

Decorator function.

▸ \<`Type`, `Parameters`, `ConstructorType`\>(`constructor`, `_?`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `unknown` |
| `Parameters` | extends `unknown`[] |
| `ConstructorType` | extends [`AbstractConstructor`](util_type_abstract_constructor.md#abstractconstructor)\<`Type`, `Parameters`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `ConstructorType` |
| `_?` | `ClassDecoratorContext`\<`ConstructorType`\> |

##### Returns

`void`

**`See`**

 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

#### Defined in

[core/metatag.ts:13](https://github.com/tensei-engine/runtime/blob/bf5c6b5/src/main/ts/core/metatag.ts#L13)
