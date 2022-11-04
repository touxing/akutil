import { isDef } from '../../../isDef'
import isPlainObject from '../../../isPlainObject'
import { deepMerge } from '../helpers/util'
import { RequestConfig } from '../types'

const strats = Object.create(null)

function defaultStrat(val1: any, val2: any): any {
  return isDef(val2) ? val2 : val1
}

function fromVal2Strat(val1: any, val2: any): any {
  if (isDef(val2)) {
    return val2
  }
}

function deepMergeStrat(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if (isDef(val2)) {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else {
    return val1
  }
}

const stratKeysDeepMerge = ['headers', 'auth']
stratKeysDeepMerge.forEach((key) => {
  strats[key] = deepMergeStrat
})

// 不需要默认值的key，只取自定义配置
const stratKeysFromVal2 = ['url', 'params', 'data']

stratKeysFromVal2.forEach((key) => {
  strats[key] = fromVal2Strat
})

/**
 * @params {} config1 default
 * @params {} config2 custom
 */
export default function mergeConfig(
  config1: RequestConfig,
  config2?: RequestConfig
) {
  if (!config2) {
    config2 = {} as RequestConfig
  }

  const config = Object.create(null)

  for (let key in config2) {
    mergeField(key)
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStrat
    config[key] = strat(config1[key], config2![key])
  }

  return config
}
