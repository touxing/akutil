import { RequestConfig, RequestPromise, RequestResponse } from '../types'
import ajax from './ajax'
import transform from './transform'

function processCofnig(config: RequestConfig) {
  config.header = config.headers
}

export default function dispatchRequest(config: RequestConfig): RequestPromise {
  processCofnig(config)
  return ajax(config)
    .then((res) => {
      return transformResponseData(res)
    })
    .catch((e) => {
      if (e && e.response) {
        e.response = transformResponseData(e.response)
      }
      return Promise.reject(e)
    })
}

function transformResponseData(res: RequestResponse): RequestResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse!)
  return res
}
