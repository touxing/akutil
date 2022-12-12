[@hotsuitor/akutil - v0.0.2](../README.md) / [Exports](../modules.md) / HashTable

# Class: HashTable

## Table of contents

### Constructors

- [constructor](HashTable.md#constructor)

### Properties

- [table](HashTable.md#table)
- [toStrFn](HashTable.md#tostrfn)

### Methods

- [djb2HashCode](HashTable.md#djb2hashcode)
- [get](HashTable.md#get)
- [hashCode](HashTable.md#hashcode)
- [isEmpty](HashTable.md#isempty)
- [loseloseHashTableCode](HashTable.md#loselosehashtablecode)
- [put](HashTable.md#put)
- [remove](HashTable.md#remove)
- [size](HashTable.md#size)
- [toString](HashTable.md#tostring)

## Constructors

### constructor

• **new HashTable**(`toStrFn?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `toStrFn` | (`item`: `any`) => `string` | `defaultToString` |

#### Defined in

[src/struct/HasTable.ts:22](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L22)

## Properties

### table

• **table**: [`Itable`](../interfaces/internal_.Itable-1.md)

#### Defined in

[src/struct/HasTable.ts:21](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L21)

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

[src/struct/HasTable.ts:20](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L20)

## Methods

### djb2HashCode

▸ **djb2HashCode**(`key`): `number`

djb2 散列函数，更好

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`number`

#### Defined in

[src/struct/HasTable.ts:125](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L125)

___

### get

▸ **get**(`key`): `any`

返回根据键值索引到的特定的值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

[src/struct/HasTable.ts:55](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L55)

___

### hashCode

▸ **hashCode**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`number`

#### Defined in

[src/struct/HasTable.ts:133](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L133)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/struct/HasTable.ts:29](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L29)

___

### loseloseHashTableCode

▸ **loseloseHashTableCode**(`key`): `number`

lose lose 散列函数

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`number`

#### Defined in

[src/struct/HasTable.ts:110](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L110)

___

### put

▸ **put**(`key`, `value`): `boolean`

向散列表增加一个新的项，相同的key值会覆盖更新
分离链接法解决hahs冲突

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[src/struct/HasTable.ts:39](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L39)

___

### remove

▸ **remove**(`key`): `boolean`

根据键值从散列表中移除值

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

[src/struct/HasTable.ts:74](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L74)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/struct/HasTable.ts:26](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L26)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/struct/HasTable.ts:92](https://github.com/touxing/akutil/blob/4b7e940/src/struct/HasTable.ts#L92)
