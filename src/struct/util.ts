export function defaultEqual(a: any, b: any): boolean {
  return a === b
}

export function defaultToString(item: any): string {
  if (item === null) {
    return 'null'
  } else if (item === undefined) {
    return 'undefined'
  } else if (typeof item === 'string' || item instanceof String) {
    return item + ''
  }
  return item.toString()
}
