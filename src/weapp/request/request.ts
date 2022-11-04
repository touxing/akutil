import { RequestStaic, RequestConfig } from './types/index'
import { extend } from '../../extend'
import defaults from './defaults'
import Request from './core/Request'
/**
 *
 */
function createInstance(config: RequestConfig): RequestStaic {
  const context = new Request(config)
  const instance = Request.prototype.request.bind(context)

  extend(instance, context)

  return instance as RequestStaic
}

const request = createInstance(defaults as RequestConfig)

request.create = function (config: any) {
  return createInstance(extend(defaults, config))
}

export default request
