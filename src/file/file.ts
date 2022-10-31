/**
 * @desc 读取文件流，下载文件
 * @param {Promise} 下载接口ajax
 * @param {Object} 下载参数
 * @param {String} 文件名
 * @returns {Promise} 下载完文件的then
 */
function downloadFileBlob(downloadAjax: any): Promise<any>
function downloadFileBlob(downloadAjax: any, params: any): Promise<any>
function downloadFileBlob(
  downloadAjax: any,
  params: any,
  filename: string
): Promise<any>
function downloadFileBlob(
  downloadAjax: any,
  params?: any,
  filename?: string
): Promise<any> {
  return downloadAjax(params, {
    responseType: 'blob',
  })
    .then((data: any) => {
      // 响应头不是文件流，直接返回
      if (!data.headers['content-disposition']) {
        return Promise.reject(data.data.text())
      }
      let tmp = data.headers['content-disposition'].match(
        /.*filename=(.*\.(.*))$/
      )
      const suffix = tmp[2] || 'xls'
      // MIME 类型参考https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
      // xlsx  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      // xls application/vnd.ms-excel
      let BlobType =
        suffix === 'xlsx'
          ? {
              type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;chartset=utf-8',
            }
          : { type: 'application/vnd.ms-excel;charset=utf-8' }
      const blob = new Blob([data.data], BlobType)
      const objectUrl = URL.createObjectURL(blob) // 创建URL
      const link = document.createElement('a')
      link.href = objectUrl
      link.download =
        filename && tmp[1]
          ? decodeURIComponent(tmp[1])
          : `${new Date().getTime()}.${suffix}` // 自定义文件名
      link.click() // 下载文件
      URL.revokeObjectURL(objectUrl) // 释放内存
    })
    .catch((err: Error) => {
      return Promise.reject(err)
    })
}
export let downloadFileWithBlob = downloadFileBlob

/**
 * @desc 通过打开新窗口下载文件内容
 * @param {string} url
 * @param {function} callback
 */
export function downloadFile(url: string) {
  window.open(url)
}

/**
 * 下载图片
 * @param {string} imgsrc 图片url
 * @param {string} name 图片名称
 * @returns {Promise}
 */
export function downloadImage(imgsrc: string, name?: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image()
    // 解决跨域 Canvas 污染问题
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      const context = canvas.getContext('2d')
      context?.drawImage(image, 0, 0, image.width, image.height)
      const url = canvas.toDataURL('image/png')
      const a = document.createElement('a')
      const event = new MouseEvent('click')
      a.download = name || Date.now().toString()
      a.href = url
      a.dispatchEvent(event)
      resolve()
    }
    image.onerror = reject
    image.src = imgsrc
  })
}
