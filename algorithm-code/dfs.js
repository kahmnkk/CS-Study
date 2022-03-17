/**
 * Depth-First Search
 * 깊이 우선 탐색
 * @param {Object<Array<Number>>} graph graph[node] 배열은 node와 연결되어 있는 노드들의 배열이다.
 * @param {Number} startNode 시작 노드
 */
function dfs(graph, startNode) {
    let visited = {};

    recursion(graph, startNode, visited);

    return Object.keys(visited);
}

function recursion(graph, startNode, visited) {
    if (visited[startNode] != null) {
        return;
    }

    visited[startNode] = startNode;

    for (let i in graph[startNode]) {
        recursion(graph, graph[startNode][i], visited);
    }
}

console.log(
    dfs(
        {
            1: [3, 2],
            2: [3, 1, 4, 5],
            3: [6, 4, 2, 1],
            4: [3, 2],
            5: [2],
            6: [3],
        },
        1,
    ),
);
