import {
  Method,
  RequestInstance,
  RequestConfig,
  RequestPromise,
  RequestResponse,
  ResolvedFn,
  RejectedFn,
} from '../types/index'
import InterceptorManager from './InterceptorManager'
import mergeConfig from './mergeConfig'
import dispatchRequest from './dispatchRequest'

interface Interceptors {
  request: InterceptorManager<RequestConfig>
  response: InterceptorManager<RequestResponse>
}

interface PromiseChain {
  resolved: ResolvedFn | ((config: RequestConfig) => RequestPromise)
  rejected?: RejectedFn
}

// @ts-ignore
export default class Request implements RequestInstance {
  defaults: RequestConfig
  interceptors: Interceptors

  constructor(instanceConfig: RequestConfig) {
    this.defaults = instanceConfig
    this.interceptors = {
      request: new InterceptorManager<RequestConfig>(),
      response: new InterceptorManager<RequestResponse>(),
    }
    const methods = [
      'get',
      'post',
      'options',
      'head',
      'delete',
      'put',
      'trace',
      'connect',
    ]

    methods.forEach((method) => {
      // @ts-ignore
      Request.prototype[method] = function (
        url: any,
        data: any,
        config: RequestConfig
      ): Promise<any> {
        return this._requestMethodWithData(
          method.toUpperCase() as Method,
          url,
          data,
          config
        )
      }
    })
  }

  request(url: any, config?: any): RequestPromise {
    if (typeof url === 'string') {
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    }
    config = mergeConfig(this.defaults, config)
    config.method = config.method.toLowerCase()

    const chain: PromiseChain[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined,
      },
    ]

    // 注意拦截器的执行顺序，对于请求拦截器，后进先出LIFO；而对于响应拦截器，FIFO，先进先出。
    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor)
    })
    this.interceptors.response.forEach((interceptor) => [
      chain.push(interceptor),
    ])

    let promise = Promise.resolve(config)

    while (chain.length) {
      const { resolved, rejected } = chain.shift()!
      promise = promise.then(resolved, rejected)
    }

    return promise
  }

  private _requestMethodWithData(
    method: Method,
    url: string,
    data?: any,
    config?: RequestConfig
  ): RequestPromise {
    return this.request(
      Object.assign(config || {}, {
        method,
        url,
        data,
      })
    )
  }
}
