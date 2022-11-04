// 防抖与节流
import { debounce } from './debounce'
import { throttle } from './throttle'

// 下载文件（图片）
import { downloadFile, downloadFileWithBlob, downloadImage } from './file/file'

import { Stack } from './Stack'
import { Queue } from './Queue'

import { extend } from './extend'

export {
  debounce,
  throttle,
  Queue,
  Stack,
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
  extend,
}
