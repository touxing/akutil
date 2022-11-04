import { RequestConfig, RequestResponse } from '../types'

export class RequestError extends Error {
  isAxiosError: boolean
  config: RequestConfig
  code?: string | null
  request?: any
  response?: RequestResponse

  constructor(
    message: string,
    config: RequestConfig,
    code?: string | null,
    request?: any,
    response?: RequestResponse
  ) {
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    // 继承内置对象 Array，Map ... 会有问题，此处是做修复
    Object.setPrototypeOf(this, RequestError.prototype)
  }
}

export function createError(
  message: string,
  config: RequestConfig,
  code?: string | null,
  request?: any,
  response?: RequestResponse
): RequestError {
  const Error = new RequestError(message, config, code, request, response)
  return Error
}
