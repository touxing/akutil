[@hotsuitor/akutil - v0.0.2](../README.md) / [Exports](../modules.md) / LinkedList

# Class: LinkedList

## Hierarchy

- **`LinkedList`**

  ↳ [`DoublyLinkedList`](DoublyLinkedList.md)

## Table of contents

### Constructors

- [constructor](LinkedList.md#constructor)

### Properties

- [head](LinkedList.md#head)
- [length](LinkedList.md#length)

### Methods

- [append](LinkedList.md#append)
- [getElementAt](LinkedList.md#getelementat)
- [getHead](LinkedList.md#gethead)
- [indexOf](LinkedList.md#indexof)
- [insert](LinkedList.md#insert)
- [isEmpty](LinkedList.md#isempty)
- [print](LinkedList.md#print)
- [push](LinkedList.md#push)
- [remove](LinkedList.md#remove)
- [removeAt](LinkedList.md#removeat)
- [size](LinkedList.md#size)
- [toString](LinkedList.md#tostring)

## Constructors

### constructor

• **new LinkedList**()

#### Defined in

[src/struct/LinkedList.ts:11](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L11)

## Properties

### head

• `Protected` **head**: ``null`` \| [`Node`](internal_.Node.md)

#### Defined in

[src/struct/LinkedList.ts:10](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L10)

___

### length

• `Protected` **length**: `number`

#### Defined in

[src/struct/LinkedList.ts:9](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L9)

## Methods

### append

▸ **append**(`element`): `void`

向链表尾添加一个新节点

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`void`

#### Defined in

[src/struct/LinkedList.ts:26](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L26)

___

### getElementAt

▸ **getElementAt**(`position`): `any`

返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`any`

Node|undefined

#### Defined in

[src/struct/LinkedList.ts:78](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L78)

___

### getHead

▸ **getHead**(): `any`

获取链表第一项

#### Returns

`any`

element

#### Defined in

[src/struct/LinkedList.ts:174](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L174)

___

### indexOf

▸ **indexOf**(`element`): `number`

返回节点在链表中匹配的第一个元素的索引

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`number`

return index, if not found, return `-1`

#### Defined in

[src/struct/LinkedList.ts:156](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L156)

___

### insert

▸ **insert**(`position`, `element`): `boolean`

向链表指定位置插入一个新的项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | 位置 |
| `element` | `any` | 项 |

#### Returns

`boolean`

#### Defined in

[src/struct/LinkedList.ts:52](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L52)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/struct/LinkedList.ts:16](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L16)

___

### print

▸ **print**(): `void`

#### Returns

`void`

#### Defined in

[src/struct/LinkedList.ts:188](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L188)

___

### push

▸ **push**(`element`): `void`

append 别名方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`void`

#### Defined in

[src/struct/LinkedList.ts:43](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L43)

___

### remove

▸ **remove**(`element`): `boolean`

从链表移除匹配的第一个元素

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`boolean`

#### Defined in

[src/struct/LinkedList.ts:125](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L125)

___

### removeAt

▸ **removeAt**(`position`): `any`

删除链表指定位置的项

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | 位置 |

#### Returns

`any`

element 删除的项目

#### Defined in

[src/struct/LinkedList.ts:100](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L100)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/struct/LinkedList.ts:19](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L19)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[src/struct/LinkedList.ts:177](https://github.com/touxing/akutil/blob/4b7e940/src/struct/LinkedList.ts#L177)
