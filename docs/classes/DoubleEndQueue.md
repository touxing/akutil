[@hotsuitor/akutil - v0.0.1](../README.md) / [Exports](../modules.md) / DoubleEndQueue

# Class: DoubleEndQueue

## Table of contents

### Constructors

- [constructor](DoubleEndQueue.md#constructor)

### Properties

- [count](DoubleEndQueue.md#count)
- [lowestCount](DoubleEndQueue.md#lowestcount)
- [queue](DoubleEndQueue.md#queue)

### Methods

- [addBack](DoubleEndQueue.md#addback)
- [addFront](DoubleEndQueue.md#addfront)
- [clear](DoubleEndQueue.md#clear)
- [dequeue](DoubleEndQueue.md#dequeue)
- [enqueue](DoubleEndQueue.md#enqueue)
- [isEmpty](DoubleEndQueue.md#isempty)
- [peek](DoubleEndQueue.md#peek)
- [peekBack](DoubleEndQueue.md#peekback)
- [peekFront](DoubleEndQueue.md#peekfront)
- [removeBack](DoubleEndQueue.md#removeback)
- [removeFront](DoubleEndQueue.md#removefront)
- [size](DoubleEndQueue.md#size)
- [toString](DoubleEndQueue.md#tostring)

## Constructors

### constructor

• **new DoubleEndQueue**()

#### Defined in

[akutil/src/struct/Queue.ts:162](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L162)

## Properties

### count

• `Protected` **count**: `number`

#### Defined in

[akutil/src/struct/Queue.ts:159](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L159)

___

### lowestCount

• `Protected` **lowestCount**: `number`

#### Defined in

[akutil/src/struct/Queue.ts:160](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L160)

___

### queue

• `Private` **queue**: [`Iqueue`](../interfaces/internal_.Iqueue.md)

#### Defined in

[akutil/src/struct/Queue.ts:161](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L161)

## Methods

### addBack

▸ **addBack**(`element`): `void`

在双端队列尾端添加新元素

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`void`

#### Defined in

[akutil/src/struct/Queue.ts:232](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L232)

___

### addFront

▸ **addFront**(`element`): `void`

在双端队列前端添加新元素

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`void`

#### Defined in

[akutil/src/struct/Queue.ts:211](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L211)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[akutil/src/struct/Queue.ts:191](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L191)

___

### dequeue

▸ **dequeue**(): `any`

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:178](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L178)

___

### enqueue

▸ **enqueue**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `any` |

#### Returns

`void`

#### Defined in

[akutil/src/struct/Queue.ts:174](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L174)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Queue.ts:171](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L171)

___

### peek

▸ **peek**(): `any`

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:185](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L185)

___

### peekBack

▸ **peekBack**(): `any`

返回双端队列尾端的第一个元素

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:260](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L260)

___

### peekFront

▸ **peekFront**(): `any`

返回双端队列前端的第一个元素

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:254](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L254)

___

### removeBack

▸ **removeBack**(): `any`

removes the first element from the back of the DoubleEndQueue

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:244](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L244)

___

### removeFront

▸ **removeFront**(): `any`

removes the first element from the front of the DoubleEndQueue

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:238](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L238)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[akutil/src/struct/Queue.ts:168](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L168)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[akutil/src/struct/Queue.ts:196](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L196)
