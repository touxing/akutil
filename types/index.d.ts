import './global'
export interface akutil {
  debounce(fn: Function, ms: number): void
  throttle(fn: Function, wait: number): void
}

export type AnyObject = Record<string, any>

export interface AnyFunction extends AnyObject {
  (...args: any[]): any
}
