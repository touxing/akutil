[@hotsuitor/akutil - v0.0.1](README.md) / Exports

# @hotsuitor/akutil - v0.0.1

## Table of contents

### References

- [downloadFile](modules.md#downloadfile)
- [downloadImage](modules.md#downloadimage)
- [extend](modules.md#extend)
- [extendDate](modules.md#extenddate)
- [formatDate](modules.md#formatdate)
- [isDef](modules.md#isdef)
- [isNil](modules.md#isnil)
- [isNull](modules.md#isnull)
- [isObject](modules.md#isobject)
- [isPlainObject](modules.md#isplainobject)
- [isUnDef](modules.md#isundef)
- [safeGetter](modules.md#safegetter)
- [safeSetter](modules.md#safesetter)

### Modules

- [&lt;internal\&gt;](modules/internal_.md)

### Classes

- [CycleQueue](classes/CycleQueue.md)
- [Dictionary](classes/Dictionary.md)
- [DoubleEndQueue](classes/DoubleEndQueue.md)
- [DoublyLinkedList](classes/DoublyLinkedList.md)
- [HashTable](classes/HashTable.md)
- [LinkedList](classes/LinkedList.md)
- [PriorityQueue](classes/PriorityQueue.md)
- [Queue](classes/Queue.md)
- [Set](classes/Set.md)
- [Stack](classes/Stack.md)

### Variables

- [default](modules.md#default)

### Functions

- [debounce](modules.md#debounce)
- [downloadFileWithBlob](modules.md#downloadfilewithblob)
- [isPromise](modules.md#ispromise)
- [throttle](modules.md#throttle)

## References

### downloadFile

Renames and re-exports [__type](modules.md#__type)

___

### downloadImage

Renames and re-exports [__type](modules.md#__type)

___

### extend

Renames and re-exports [__type](modules.md#__type)

___

### extendDate

Renames and re-exports [__type](modules.md#__type)

___

### formatDate

Renames and re-exports [__type](modules.md#__type)

___

### isDef

Renames and re-exports [__type](modules.md#__type)

___

### isNil

Renames and re-exports [__type](modules.md#__type)

___

### isNull

Renames and re-exports [__type](modules.md#__type)

___

### isObject

Renames and re-exports [__type](modules.md#__type)

___

### isPlainObject

Renames and re-exports [__type](modules.md#__type)

___

### isUnDef

Renames and re-exports [__type](modules.md#__type)

___

### safeGetter

Renames and re-exports [__type](modules.md#__type)

___

### safeSetter

Renames and re-exports [__type](modules.md#__type)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CycleQueue` | typeof [`CycleQueue`](classes/CycleQueue.md) |
| `Dictionary` | typeof [`Dictionary`](classes/Dictionary.md) |
| `DoubleEndQueue` | typeof [`DoubleEndQueue`](classes/DoubleEndQueue.md) |
| `DoublyLinkedList` | typeof [`DoublyLinkedList`](classes/DoublyLinkedList.md) |
| `HashTable` | typeof [`HashTable`](classes/HashTable.md) |
| `LinkedList` | typeof [`LinkedList`](classes/LinkedList.md) |
| `PriorityQueue` | typeof [`PriorityQueue`](classes/PriorityQueue.md) |
| `Queue` | typeof [`Queue`](classes/Queue.md) |
| `Set` | typeof [`Set`](classes/Set.md) |
| `Stack` | typeof [`Stack`](classes/Stack.md) |
| `debounce` | (`fn`: `Function`, `ms`: `number`) => (`this`: `any`, ...`args`: `any`[]) => `void` |
| `downloadFile` | (`url`: `string`) => `void` |
| `downloadFileWithBlob` | (`downloadAjax`: `any`) => `Promise`<`any`\>(`downloadAjax`: `any`, `params`: `any`) => `Promise`<`any`\>(`downloadAjax`: `any`, `params`: `any`, `filename`: `string`) => `Promise`<`any`\> |
| `downloadImage` | (`imgsrc`: `string`, `name?`: `string`) => `Promise`<`void`\> |
| `extend` | (`this`: `any`, ...`args`: `any`[]) => `object` |
| `extendDate` | () => `void` |
| `formatDate` | (`date`: `Date`, `pattern`: `string`) => `string` |
| `isDef` | (`value`: `any`) => `boolean` |
| `isNil` | (`value`: `any`) => `boolean` |
| `isNull` | (`value`: `unknown`) => `boolean` |
| `isObject` | (`value`: `any`) => `boolean` |
| `isPlainObject` | (`value`: `any`) => `boolean` |
| `isPromise` | (`v`: `any`) => `boolean` |
| `isUnDef` | (`value`: `any`) => `boolean` |
| `safeGetter` | (`obj`: [`AnyObject`](modules/internal_.md#anyobject), `key`: `string`) => `any` |
| `safeSetter` | (`obj`: [`AnyObject`](modules/internal_.md#anyobject), `key`: `string`, `value`: `any`) => [`AnyObject`](modules/internal_.md#anyobject) |
| `throttle` | (`fn`: `Function`, `wait`: `number`, `immediate`: `boolean`) => (`this`: `any`) => `void` |

#### Defined in

[akutil/src/akutil.ts:62](https://github.com/touxing/akutil/blob/6013b22/src/akutil.ts#L62)

## Functions

### debounce

▸ **debounce**(`fn`, `ms?`): (`this`: `any`, ...`args`: `any`[]) => `void`

函数防抖

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fn` | `Function` | `undefined` |
| `ms` | `number` | `300` |

#### Returns

`fn`

▸ (`this`, ...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[akutil/src/debounce.ts:7](https://github.com/touxing/akutil/blob/6013b22/src/debounce.ts#L7)

___

### downloadFileWithBlob

▸ **downloadFileWithBlob**(`downloadAjax`): `Promise`<`any`\>

**`Desc`**

读取文件流，下载文件

#### Parameters

| Name | Type |
| :------ | :------ |
| `downloadAjax` | `any` |

#### Returns

`Promise`<`any`\>

下载完文件的promise

#### Defined in

[akutil/src/file/file.ts:8](https://github.com/touxing/akutil/blob/6013b22/src/file/file.ts#L8)

▸ **downloadFileWithBlob**(`downloadAjax`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `downloadAjax` | `any` |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[akutil/src/file/file.ts:9](https://github.com/touxing/akutil/blob/6013b22/src/file/file.ts#L9)

▸ **downloadFileWithBlob**(`downloadAjax`, `params`, `filename`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `downloadAjax` | `any` |
| `params` | `any` |
| `filename` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[akutil/src/file/file.ts:10](https://github.com/touxing/akutil/blob/6013b22/src/file/file.ts#L10)

___

### isPromise

▸ **isPromise**(`v`): `boolean`

判断是否 promise

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

`boolean`

#### Defined in

[akutil/src/isPromise.ts:6](https://github.com/touxing/akutil/blob/6013b22/src/isPromise.ts#L6)

___

### throttle

▸ **throttle**(`fn`, `wait?`, `immediate?`): (`this`: `any`) => `void`

节流函数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fn` | `Function` | `undefined` |  |
| `wait` | `number` | `300` |  |
| `immediate` | `boolean` | `false` | 是否立即触发函数 |

#### Returns

`fn`

Function

▸ (`this`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |

##### Returns

`void`

#### Defined in

[akutil/src/throttle.ts:8](https://github.com/touxing/akutil/blob/6013b22/src/throttle.ts#L8)
