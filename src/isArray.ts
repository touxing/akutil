import getTag from './.internal/getTag'

function isArray(value: any): boolean {
  return getTag(value) === '[object Array]'
}

export default isArray
