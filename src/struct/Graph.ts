import { AnyFunction } from "../../types"
import { Dictionary } from "./Dictionary"
import { Queue } from "./Queue"

/*
 * File Created: Thursday, 19th January 2023 4:07:00 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Thursday, 19th January 2023 4:07:16 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 * -----
 * Copyright 2022 - 2023 Your Company, Your Company
 */
/**
 * 邻接表实现图
 */
export class Graph {
  /** 顶点数组 */
  private vertices: any[]
  /** 邻接表 */
  private adjList: Dictionary
  constructor() {
    this.vertices = []
    this.adjList = new Dictionary()
  }

  /**
   * 添加顶点
   * @param v
   */
  addVertex(v: any) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  /**
   * 添加边
   * @param v
   * @param w
   */
  addEdge(v: any, w: any) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  toString() {
    let s = ""
    for (let i = 0, len = this.vertices.length; i < len; i++) {
      let vertex = this.vertices[i]
      s += vertex + " -> "
      let neighors = this.adjList.get(vertex)
      for (let j = 0; j < neighors.length; j++) {
        s += " " + neighors[j]
      }
      s += "\n"
    }
    return s
  }

  // 广度优先搜索
  // 1.创建空队列Q
  // 2.将v标注为被发现的（灰色），将v入队列Q
  // 3.如果队列Q非空
  // 3.1将u从队列中出队列
  // 3.2将u标记为被发现的（灰色）
  // 3.3将u所有没被访问过的邻点（白色）入队列
  // 3.4将u标记为已被探索
  /**
   * 广度优先搜索
   * @param v 搜索顶点
   * @param callback
   */
  bfs(v: any, callback: AnyFunction) {
    let color = initializeColor(this.vertices)
    let queue = new Queue()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      let u = queue.dequeue()
      let neighors = this.adjList.get(u)
      color[u] = "grey"
      neighors.forEach((item: any) => {
        if (color[item] === "white") {
          color[item] = "grey"
          queue.enqueue(item)
        }
      })
      color[u] = "block"
      if (typeof callback === "function") {
        callback(u)
      }
    }
  }

  // 深度优先搜索
  // 1.顶点v，标注为发现的（灰色）
  // 2.对于v所有未访问的邻点w，访问顶点w，对v标注为已被探索的（黑色）
  // 3.递归访问
  dfs(callback: AnyFunction) {
    let color = initializeColor(this.vertices)
    this.vertices.forEach((item) => {
      if (color[item] === "white") {
        this.dfsVist(item, color, callback)
      }
    })
  }
  dfsVist(u: any, color: any[], callback: AnyFunction) {
    color[u] = "grey"
    if (callback) {
      callback(u)
    }
    let neighors = this.adjList.get(u)
    neighors.forEach((item: any) => {
      if (color[item] === "white") {
        this.dfsVist(item, color, callback)
      }
    })
    color[u] = "black"
  }
}

/**
 * 标记颜色：
 * 白色：表示该顶点还没有被访问
 * 灰色：表示该顶点被访问过，但未被探索过
 * 黑色：表示该顶点已被访问过且被完全探索过
 * @param vertices 顶点列表
 * @returns
 */
function initializeColor(vertices: any[]): any[] {
  let color: any[] = []
  vertices.forEach((item) => {
    color[item] = "white"
  })
  return color
}
