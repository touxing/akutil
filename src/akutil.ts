// 防抖与节流
import { debounce } from './debounce'
import { throttle } from './throttle'

// 下载文件（图片）
import { downloadFile, downloadFileWithBlob, downloadImage } from './file/file'

import { Stack } from './struct/Stack'
import { Queue, PriorityQueue, CycleQueue } from './struct/Queue'
import { LinkedList } from './struct/LinkedList'
import { DoublyLinkedList } from './struct/DoublyLinkedList'
import { Set } from './struct/Set'

import { extend } from './extend'

export {
  debounce,
  throttle,
  Stack,
  Queue,
  PriorityQueue,
  CycleQueue,
  LinkedList,
  DoublyLinkedList,
  Set,
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
  LinkedList,
  DoublyLinkedList,
  Set,
  extend,
}
