/**
 * 获取随机整数
 * @param min
 * @param max
 * @returns
 */
export const getRamdon = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min)
}
