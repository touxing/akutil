import { LRUCache, LRUCacheLinkedList } from "../src/akutil"

describe("LRUCache", () => {
  test("LRUCache constructor", () => {
    let lrucache = new LRUCache()
    expect(lrucache.max).toEqual(10)
    expect(lrucache.value.size).toEqual(0)
    Array.from({ length: 10 }, (v, i) => lrucache.set(i, v))
    expect(lrucache.value.size).toEqual(10)
  })
  test("get cache undefined", () => {
    let lrucache = new LRUCache(2)
    expect(lrucache.value).toEqual(new Map())
    expect(lrucache.get(1)).toBeUndefined()
  })
  test("get cache", () => {
    let lrucache = new LRUCache(3)
    ;[1, 2, 3, 4, 5].forEach((v) => {
      lrucache.set(v, v)
    })
    let one = lrucache.get(2)
    expect(one).toBeUndefined()
  })

  test("get cache value", () => {
    let lrucache = new LRUCache(3)
    ;[1, 2, 3, 4, 5].forEach((v) => {
      lrucache.set(v, v)
    })
    let one = lrucache.get(3)
    expect(one).toEqual(3)
    expect(lrucache.cache).toEqual(
      new Map([
        [4, 4],
        [5, 5],
        [3, 3],
      ])
    )
  })

  test("set in size cache", () => {
    let lrucache = new LRUCache(3)
    lrucache.set(1, 1)
    lrucache.set(2, 2)
    let one = lrucache.get(1)
    expect(one).toEqual(1)
    expect(lrucache.cache).toEqual(
      new Map([
        [2, 2],
        [1, 1],
      ])
    )
    lrucache.set(1, 1)
    expect(lrucache.value).toEqual(
      new Map([
        [1, 1],
        [2, 2],
      ])
    )
  })

  test("set out max cache", () => {
    let lrucache = new LRUCache(3)
    ;[1, 2, 3, 4, 5].forEach((v) => {
      lrucache.set(v, v)
    })
    expect(lrucache.cache).toEqual(
      new Map([
        [3, 3],
        [4, 4],
        [5, 5],
      ])
    )
  })

  test("LRUCacheLinkedList constructor", () => {
    let lrucache = new LRUCacheLinkedList()
    lrucache.set(0, 0)
    expect(lrucache.size).toEqual(1)
    Array.from({ length: 10 }, (v, i) => lrucache.set(i, i))
    expect(lrucache.size).toEqual(10)
  })

  test("get LRUCacheLinkedList", () => {
    let lrucache = new LRUCacheLinkedList(2)
    let empty = lrucache.get(1)
    expect(empty).toBeUndefined()

    expect(lrucache.value).toEqual({})

    lrucache.set(1, 1)
    lrucache.set(2, 2)
    let one = lrucache.get(2)
    expect(one).toEqual(2)

    let unexisting = lrucache.get(3)
    expect(unexisting).toBeUndefined()
  })

  test("LRUCacheLinkedList create instance", () => {
    let fn = jest.fn(() => {
      new LRUCacheLinkedList()
    })
    // 模拟成功执行
    fn()
    expect(fn).toReturn()
  })

  test("drinks returns", () => {
    const drink = jest.fn(() => true)

    drink()

    expect(drink).toHaveReturned()
  })

  test("LRUCacheLinkedList max is zero", () => {
    let fn = jest.fn(() => new LRUCacheLinkedList(0))
    expect(fn).toThrow(Error)
  })

  test("LRUCacheLinkedList max is one", () => {
    let lrucache = new LRUCacheLinkedList(1)
    lrucache.set("a", 1)
    lrucache.set("b", 1)

    expect(lrucache.toString()).toEqual("LinkedList(1) { b <==> 1 }")
  })

  test("set LRUCacheLinkedList", () => {
    let lrucache = new LRUCacheLinkedList(3)
    expect(lrucache.toString()).toEqual("LinkedList(0) {  }")
    let one = lrucache.get("a")
    expect(one).toBeUndefined()
    lrucache.set("a", 1)
    expect(lrucache.toString()).toEqual("LinkedList(1) { a <==> 1 }")
    lrucache.set("b", 2)
    lrucache.set("c", 3)
    expect(lrucache.toString()).toEqual(
      "LinkedList(3) { c <==> 3, b <==> 2, a <==> 1 }"
    )
    let a = lrucache.get("a")
    expect(a).toEqual(1)
    expect(lrucache.toString()).toEqual(
      "LinkedList(3) { a <==> 1, c <==> 3, b <==> 2 }"
    )
    lrucache.set("d", 4)
    expect(lrucache.toString()).toEqual(
      "LinkedList(3) { d <==> 4, a <==> 1, c <==> 3 }"
    )
  })

  test("set max size LRUCacheLinkedList", () => {
    let lrucache = new LRUCacheLinkedList(2)
    lrucache.set("0", "0")
    lrucache.set("a", "a")
    lrucache.set("b", "b")
    expect(lrucache.toString()).toEqual("LinkedList(2) { b <==> b, a <==> a }")
    lrucache.set("b", "b")
    expect(lrucache.toString()).toEqual("LinkedList(2) { b <==> b, a <==> a }")
    lrucache.set("a", "a")
    expect(lrucache.toString()).toEqual("LinkedList(2) { a <==> a, b <==> b }")
  })

  test("clear LRUCacheLinkedList", () => {
    let lrucache = new LRUCacheLinkedList(2)
    lrucache.set("a", 1)
    lrucache.set("b", 1)
    expect(lrucache.toString()).toEqual("LinkedList(2) { b <==> 1, a <==> 1 }")
    lrucache.clear()
    expect(lrucache.value).toEqual({})
  })

  test("LRUCacheLinkedList forEach", () => {
    let lrucache = new LRUCacheLinkedList(2)
    lrucache.set("a", 1)
    lrucache.set("b", 2)
    let result: Record<any, any> = {}
    lrucache.forEach(({ key, value }) => {
      result[key] = value
    })
    expect(result).toEqual({
      a: 1,
      b: 2,
    })
  })

  test("LRUCacheLinkedList for of loop", () => {
    let lrucache = new LRUCacheLinkedList(2)
    lrucache.set("a", 1)
    lrucache.set("b", 2)
    let result: any[] = []
    for (let { value } of lrucache) {
      result.push(value)
    }

    expect(result).toEqual([2, 1])
  })

  test("test print", () => {
    let cache = new LRUCache()
    let cache2 = new LRUCacheLinkedList()
    expect(cache.print()).toBeUndefined()
    expect(cache2.print()).toBeUndefined()
    cache.set(1,1)
    cache2.set(1,1)
    expect(cache.print()).toBeUndefined()
    expect(cache2.print()).toBeUndefined()
  })
})
