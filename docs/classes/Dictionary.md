[@hotsuitor/akutil - v0.0.1](../README.md) / [Exports](../modules.md) / Dictionary

# Class: Dictionary

## Table of contents

### Constructors

- [constructor](Dictionary.md#constructor)

### Properties

- [table](Dictionary.md#table)
- [toStrFn](Dictionary.md#tostrfn)

### Methods

- [clear](Dictionary.md#clear)
- [forEach](Dictionary.md#foreach)
- [get](Dictionary.md#get)
- [hasKey](Dictionary.md#haskey)
- [isEmpty](Dictionary.md#isempty)
- [keyValues](Dictionary.md#keyvalues)
- [keys](Dictionary.md#keys)
- [remove](Dictionary.md#remove)
- [set](Dictionary.md#set)
- [size](Dictionary.md#size)
- [toString](Dictionary.md#tostring)
- [values](Dictionary.md#values)

## Constructors

### constructor

• **new Dictionary**(`toStrFn?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `toStrFn` | (`item`: `any`) => `string` | `defaultToString` |

#### Defined in

[akutil/src/struct/Dictionary.ts:21](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L21)

## Properties

### table

• **table**: [`Itable`](../interfaces/internal_.Itable.md)

#### Defined in

[akutil/src/struct/Dictionary.ts:20](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L20)

___

### toStrFn

• **toStrFn**: (`item`: `any`) => `string`

#### Type declaration

▸ (`item`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |

##### Returns

`string`

#### Defined in

[akutil/src/struct/Dictionary.ts:19](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L19)

## Methods

### clear

▸ **clear**(): `void`

清空字典

#### Returns

`void`

#### Defined in

[akutil/src/struct/Dictionary.ts:70](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L70)

___

### forEach

▸ **forEach**(`callbackFn`): `void`

迭代字典中所有的键值对

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackFn` | (`key`: `any`, `value?`: `any`, `index?`: `number`) => `any` |

#### Returns

`void`

#### Defined in

[akutil/src/struct/Dictionary.ts:107](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L107)

___

### get

▸ **get**(`key`): `any`

获取key对应的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[akutil/src/struct/Dictionary.ts:52](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L52)

___

### hasKey

▸ **hasKey**(`key`): `boolean`

字典中是否存在key

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

if has return true, else return false

#### Defined in

[akutil/src/struct/Dictionary.ts:31](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L31)

___

### isEmpty

▸ **isEmpty**(): `boolean`

字典是否为空

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Dictionary.ts:79](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L79)

___

### keyValues

▸ **keyValues**(): `any`[]

以数组形式返回字典中所有[valuePair]的值

#### Returns

`any`[]

#### Defined in

[akutil/src/struct/Dictionary.ts:100](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L100)

___

### keys

▸ **keys**(): `any`[]

以数组形式返回字典中所有key值

#### Returns

`any`[]

#### Defined in

[akutil/src/struct/Dictionary.ts:86](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L86)

___

### remove

▸ **remove**(`key`): `boolean`

移除字典中key对应的数据值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Dictionary.ts:60](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L60)

___

### set

▸ **set**(`key`, `value`): `boolean`

向字典中添加新元素。如果key已存在，则会覆盖已存在的值。

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Dictionary.ts:40](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L40)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[akutil/src/struct/Dictionary.ts:73](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L73)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[akutil/src/struct/Dictionary.ts:118](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L118)

___

### values

▸ **values**(): `any`[]

以数组形式返回字典中所有value值

#### Returns

`any`[]

#### Defined in

[akutil/src/struct/Dictionary.ts:93](https://github.com/touxing/akutil/blob/6013b22/src/struct/Dictionary.ts#L93)
