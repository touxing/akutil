[@hotsuitor/akutil - v0.0.2](../README.md) / [Exports](../modules.md) / Set

# Class: Set

## Table of contents

### Constructors

- [constructor](Set.md#constructor)

### Properties

- [items](Set.md#items)

### Methods

- [add](Set.md#add)
- [clear](Set.md#clear)
- [delete](Set.md#delete)
- [difference](Set.md#difference)
- [has](Set.md#has)
- [intersection](Set.md#intersection)
- [isSubsetOf](Set.md#issubsetof)
- [size](Set.md#size)
- [sizeLegacy](Set.md#sizelegacy)
- [union](Set.md#union)
- [values](Set.md#values)
- [valuesLegacy](Set.md#valueslegacy)

## Constructors

### constructor

• **new Set**()

#### Defined in

[src/struct/Set.ts:7](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L7)

## Properties

### items

• `Protected` **items**: [`SetContainerType`](../interfaces/internal_.SetContainerType.md)

#### Defined in

[src/struct/Set.ts:6](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L6)

## Methods

### add

▸ **add**(`element`): `boolean`

向集合添加一个新元素

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`boolean`

if add successfuly return true, else return false

#### Defined in

[src/struct/Set.ts:26](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L26)

___

### clear

▸ **clear**(): `void`

clear all element

#### Returns

`void`

void

#### Defined in

[src/struct/Set.ts:85](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L85)

___

### delete

▸ **delete**(`element`): `boolean`

从集合删除一个元素

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`boolean`

if delete successfuly return true, else return false

#### Defined in

[src/struct/Set.ts:39](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L39)

___

### difference

▸ **difference**(`otherSet`): [`Set`](Set.md)

差集运算

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherSet` | [`Set`](Set.md) |

#### Returns

[`Set`](Set.md)

差集

#### Defined in

[src/struct/Set.ts:128](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L128)

___

### has

▸ **has**(`element`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`boolean`

if has element return true, else return fase

#### Defined in

[src/struct/Set.ts:16](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L16)

___

### intersection

▸ **intersection**(`otherSet`): [`Set`](Set.md)

交集运算

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherSet` | [`Set`](Set.md) |

#### Returns

[`Set`](Set.md)

交集

#### Defined in

[src/struct/Set.ts:106](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L106)

___

### isSubsetOf

▸ **isSubsetOf**(`otherSet`): `boolean`

判断是否子集

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherSet` | [`Set`](Set.md) |

#### Returns

`boolean`

if 子集 return true, else return false

#### Defined in

[src/struct/Set.ts:144](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L144)

___

### size

▸ **size**(): `number`

返回集合包含元素的数量

#### Returns

`number`

#### Defined in

[src/struct/Set.ts:51](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L51)

___

### sizeLegacy

▸ **sizeLegacy**(): `number`

#### Returns

`number`

#### Defined in

[src/struct/Set.ts:55](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L55)

___

### union

▸ **union**(`otherSet`): [`Set`](Set.md)

并集运算

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherSet` | [`Set`](Set.md) |

#### Returns

[`Set`](Set.md)

并集运算后的集合

#### Defined in

[src/struct/Set.ts:94](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L94)

___

### values

▸ **values**(): `any`[]

返回一个包含集合中所有值的数组

#### Returns

`any`[]

#### Defined in

[src/struct/Set.ts:68](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L68)

___

### valuesLegacy

▸ **valuesLegacy**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/struct/Set.ts:71](https://github.com/touxing/akutil/blob/4b7e940/src/struct/Set.ts#L71)
