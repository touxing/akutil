import { createError } from '../helpers/error'
import { RequestConfig, RequestPromise, RequestResponse } from '../types/index'

export default function ajax(config: RequestConfig): RequestPromise {
  return new Promise((resolve, reject) => {
    const { cancelToken, validateStatus } = config
    // 执行 wx.request 方法 发起 HTTPS 网络请求。
    // 执行 processCancel 处理请求取消逻辑。
    // 参考：https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    const request = wx.request({
      ...config,
      success(res: any) {
        const responseData = res.data
        const response: RequestResponse = {
          data: responseData,
          status: res.statusCode,
          headers: res.header,
          profile: res.profile,
          config,
          request,
        }
        handleResponse(response)
      },
      fail(err: any) {
        reject(
          createError(`Request fail ${err.errMsg}`, config, err.errno, request)
        )
      },
    })

    processCancel()

    function processCancel(): void {
      // 取消请求
      if (cancelToken) {
        cancelToken.promise.then((reason: any) => {
          request.abort()
          reject(reason)
        })
      }
    }

    function handleResponse(response: RequestResponse) {
      if (!validateStatus || validateStatus(response.status)) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
