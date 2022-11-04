import { RequestTransformer } from './../types/index'

export default function transform(
  data: any,
  header: any,
  fns: RequestTransformer | RequestTransformer[]
) {
  if (!fns) {
    return data
  }
  if (!Array.isArray(fns)) {
    fns = [fns]
  }
  fns.forEach((fn) => {
    fn.apply(data, header)
  })

  return data
}
