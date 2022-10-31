/**
 * 节流函数
 * @param {Function} fn
 * @param {number} wait
 * @returns Function
 */
export declare const throttle: (fn: Function, wait?: number) => (this: any) => void;
