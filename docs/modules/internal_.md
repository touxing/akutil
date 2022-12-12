[@hotsuitor/akutil - v0.0.2](../README.md) / [Exports](../modules.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [DoublyNode](../classes/internal_.DoublyNode.md)
- [Node](../classes/internal_.Node.md)
- [PriorityQueueNode](../classes/internal_.PriorityQueueNode.md)

### Interfaces

- [Iqueue](../interfaces/internal_.Iqueue.md)
- [Itable](../interfaces/internal_.Itable.md)
- [Itable](../interfaces/internal_.Itable-1.md)
- [SetContainerType](../interfaces/internal_.SetContainerType.md)

### Type Aliases

- [AnyObject](internal_.md#anyobject)
- [Record](internal_.md#record)

## Type Aliases

### AnyObject

Ƭ **AnyObject**: [`Record`](internal_.md#record)<`string`, `any`\>

#### Defined in

[types/index.d.ts:7](https://github.com/touxing/akutil/blob/4b7e940/types/index.d.ts#L7)

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1577
