import { RejectedFn, ResolvedFn } from '../types'

interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  private interceptor: Array<Interceptor<T> | null>

  constructor() {
    this.interceptor = []
  }

  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptor.push({
      resolved,
      rejected,
    })
    return this.interceptor.length - 1
  }

  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptor.forEach((interceptor) => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  eject(id: number): void {
    if (this.interceptor[id]) {
      // 不能 splice，会改掉原来的顺序
      this.interceptor[id] = null
    }
  }
}
