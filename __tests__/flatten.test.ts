import { flatten } from "../src/akutil"

describe("flatten", () => {
  test("flatten", () => {
    expect(flatten([1, [2], [[3]], [[[[4]]]]])).toEqual([1, 2, 3, 4])
  })
})
