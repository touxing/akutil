import { Graph } from "../src/akutil"

function initGraph() {
  let graph = new Graph()
  let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
  myVertices.forEach((item) => {
    graph.addVertex(item)
  })
  graph.addEdge("A", "B")
  graph.addEdge("A", "C")
  graph.addEdge("A", "D")
  graph.addEdge("C", "D")
  graph.addEdge("C", "G")
  graph.addEdge("D", "G")
  graph.addEdge("D", "H")
  graph.addEdge("B", "E")
  graph.addEdge("B", "F")
  graph.addEdge("E", "I")

  return {
    graph,
    vertices: myVertices,
  }
}
describe("Graph", () => {
  test("addVertex and addEdge", () => {
    let graph = new Graph()
    let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    myVertices.forEach((item) => {
      graph.addVertex(item)
    })
    graph.addEdge("A", "B")
    graph.addEdge("A", "C")
    graph.addEdge("A", "D")
    graph.addEdge("C", "D")
    graph.addEdge("C", "G")
    graph.addEdge("D", "G")
    graph.addEdge("D", "H")
    graph.addEdge("B", "E")
    graph.addEdge("B", "F")
    graph.addEdge("E", "I")

    expect(graph.toString()).toEqual(
      `A ->  B C D
B ->  A E F
C ->  A D G
D ->  A C G H
E ->  B I
F ->  B
G ->  C D
H ->  D
I ->  E
`
    )
  })

  test("BFS", () => {
    let data = initGraph()
    let arr: any[] = []
    data.graph.bfs(data.vertices[0], (value) => {
      arr.push(value)
    })
    expect(arr.join("")).toEqual("ABCDEFGHI")
  })

  test("DFS", () => {
    let data = initGraph()
    let arr: any[] = []
    data.graph.dfs((value) => {
      arr.push(value)
    })
    console.log(arr)
    expect(arr.join("")).toEqual("ABEIFCDGH")
  })
})
