[@hotsuitor/akutil - v0.0.1](../README.md) / [Exports](../modules.md) / DoublyLinkedList

# Class: DoublyLinkedList

## Hierarchy

- [`LinkedList`](LinkedList.md)

  ↳ **`DoublyLinkedList`**

## Table of contents

### Constructors

- [constructor](DoublyLinkedList.md#constructor)

### Properties

- [head](DoublyLinkedList.md#head)
- [length](DoublyLinkedList.md#length)
- [tail](DoublyLinkedList.md#tail)

### Methods

- [append](DoublyLinkedList.md#append)
- [getElementAt](DoublyLinkedList.md#getelementat)
- [getHead](DoublyLinkedList.md#gethead)
- [getTail](DoublyLinkedList.md#gettail)
- [indexOf](DoublyLinkedList.md#indexof)
- [insert](DoublyLinkedList.md#insert)
- [isEmpty](DoublyLinkedList.md#isempty)
- [print](DoublyLinkedList.md#print)
- [push](DoublyLinkedList.md#push)
- [remove](DoublyLinkedList.md#remove)
- [removeAt](DoublyLinkedList.md#removeat)
- [size](DoublyLinkedList.md#size)
- [toString](DoublyLinkedList.md#tostring)

## Constructors

### constructor

• **new DoublyLinkedList**()

#### Overrides

[LinkedList](LinkedList.md).[constructor](LinkedList.md#constructor)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:20](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L20)

## Properties

### head

• `Protected` **head**: ``null`` \| [`DoublyNode`](internal_.DoublyNode.md)

#### Overrides

[LinkedList](LinkedList.md).[head](LinkedList.md#head)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:18](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L18)

___

### length

• `Protected` **length**: `number`

#### Inherited from

[LinkedList](LinkedList.md).[length](LinkedList.md#length)

#### Defined in

[akutil/src/struct/LinkedList.ts:9](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L9)

___

### tail

• `Protected` **tail**: ``null`` \| [`DoublyNode`](internal_.DoublyNode.md)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:19](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L19)

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

#### Overrides

[LinkedList](LinkedList.md).[append](LinkedList.md#append)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:25](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L25)

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

#### Inherited from

[LinkedList](LinkedList.md).[getElementAt](LinkedList.md#getelementat)

#### Defined in

[akutil/src/struct/LinkedList.ts:78](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L78)

___

### getHead

▸ **getHead**(): `any`

获取链表第一项

#### Returns

`any`

element

#### Inherited from

[LinkedList](LinkedList.md).[getHead](LinkedList.md#gethead)

#### Defined in

[akutil/src/struct/LinkedList.ts:174](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L174)

___

### getTail

▸ **getTail**(): `any`

#### Returns

`any`

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:143](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L143)

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

#### Overrides

[LinkedList](LinkedList.md).[indexOf](LinkedList.md#indexof)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:131](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L131)

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

#### Overrides

[LinkedList](LinkedList.md).[insert](LinkedList.md#insert)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:41](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L41)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LinkedList](LinkedList.md).[isEmpty](LinkedList.md#isempty)

#### Defined in

[akutil/src/struct/LinkedList.ts:16](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L16)

___

### print

▸ **print**(): `void`

#### Returns

`void`

#### Overrides

[LinkedList](LinkedList.md).[print](LinkedList.md#print)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:146](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L146)

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

#### Inherited from

[LinkedList](LinkedList.md).[push](LinkedList.md#push)

#### Defined in

[akutil/src/struct/LinkedList.ts:43](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L43)

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

#### Overrides

[LinkedList](LinkedList.md).[remove](LinkedList.md#remove)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:123](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L123)

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

#### Overrides

[LinkedList](LinkedList.md).[removeAt](LinkedList.md#removeat)

#### Defined in

[akutil/src/struct/DoublyLinkedList.ts:93](https://github.com/touxing/akutil/blob/6013b22/src/struct/DoublyLinkedList.ts#L93)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Inherited from

[LinkedList](LinkedList.md).[size](LinkedList.md#size)

#### Defined in

[akutil/src/struct/LinkedList.ts:19](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L19)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[LinkedList](LinkedList.md).[toString](LinkedList.md#tostring)

#### Defined in

[akutil/src/struct/LinkedList.ts:177](https://github.com/touxing/akutil/blob/6013b22/src/struct/LinkedList.ts#L177)
