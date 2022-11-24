[@hotsuitor/akutil - v0.0.1](../README.md) / [Exports](../modules.md) / CycleQueue

# Class: CycleQueue

循环队列
是为了解决内存空间浪费的问题
用指针方式实现

## Table of contents

### Constructors

- [constructor](CycleQueue.md#constructor)

### Properties

- [head](CycleQueue.md#head)
- [maxSize](CycleQueue.md#maxsize)
- [queue](CycleQueue.md#queue)
- [tail](CycleQueue.md#tail)

### Methods

- [clear](CycleQueue.md#clear)
- [dequeue](CycleQueue.md#dequeue)
- [enqueue](CycleQueue.md#enqueue)
- [isEmpty](CycleQueue.md#isempty)
- [isFull](CycleQueue.md#isfull)
- [peek](CycleQueue.md#peek)
- [print](CycleQueue.md#print)
- [size](CycleQueue.md#size)
- [toString](CycleQueue.md#tostring)

## Constructors

### constructor

• **new CycleQueue**(`size`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Defined in

[akutil/src/struct/Queue.ts:101](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L101)

## Properties

### head

• `Private` **head**: `number`

#### Defined in

[akutil/src/struct/Queue.ts:98](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L98)

___

### maxSize

• **maxSize**: `number`

#### Defined in

[akutil/src/struct/Queue.ts:97](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L97)

___

### queue

• `Private` **queue**: `any`[]

#### Defined in

[akutil/src/struct/Queue.ts:96](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L96)

___

### tail

• `Private` **tail**: `number`

#### Defined in

[akutil/src/struct/Queue.ts:99](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L99)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[akutil/src/struct/Queue.ts:143](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L143)

___

### dequeue

▸ **dequeue**(): `any`

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:128](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L128)

___

### enqueue

▸ **enqueue**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Queue.ts:119](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L119)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Queue.ts:109](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L109)

___

### isFull

▸ **isFull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[akutil/src/struct/Queue.ts:112](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L112)

___

### peek

▸ **peek**(): `any`

#### Returns

`any`

#### Defined in

[akutil/src/struct/Queue.ts:137](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L137)

___

### print

▸ **print**(): `void`

#### Returns

`void`

#### Defined in

[akutil/src/struct/Queue.ts:149](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L149)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[akutil/src/struct/Queue.ts:116](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L116)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[akutil/src/struct/Queue.ts:146](https://github.com/touxing/akutil/blob/6013b22/src/struct/Queue.ts#L146)
