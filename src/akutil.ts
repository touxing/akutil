// 防抖与节流
import { debounce } from './debounce'
import { throttle } from './throttle'

// 下载文件（图片）
import { downloadFile, downloadFileWithBlob, downloadImage } from './file/file'

import { Stack } from './struct/Stack'
import {
  Queue,
  PriorityQueue,
  CycleQueue,
  DoubleEndQueue,
} from './struct/Queue'
import { LinkedList } from './struct/LinkedList'
import { DoublyLinkedList } from './struct/DoublyLinkedList'
import { Set } from './struct/Set'
import { Dictionary } from './struct/Dictionary'
import { HashTable } from './struct/HasTable'

import { extend } from './extend'

export {
  debounce,
  throttle,
  Stack,
  Queue,
  PriorityQueue,
  CycleQueue,
  DoubleEndQueue,
  LinkedList,
  DoublyLinkedList,
  Set,
  Dictionary,
  HashTable,
  extend,
  downloadFile,
  downloadFileWithBlob,
  downloadImage,
}
export default {
  debounce,
  throttle,
  downloadFile,
  downloadFileWithBlob,
  downloadImage,
  Stack,
  Queue,
  PriorityQueue,
  CycleQueue,
  DoubleEndQueue,
  LinkedList,
  DoublyLinkedList,
  Set,
  Dictionary,
  HashTable,
  extend,
}
