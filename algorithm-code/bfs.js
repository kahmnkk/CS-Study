/**
 * Breadth-First Search
 * 너비 우선 탐색
 * @param {Object<Array<Number>>} graph graph[node] 배열은 node와 연결되어 있는 노드들의 배열이다.
 * @param {Number} startNode 시작 노드
 */
function bfs(graph, startNode) {
    let visited = {};
    let needVisit = [];

    needVisit.push(startNode);
    visited[startNode] = startNode;

    while (needVisit.length != 0) {
        const node = needVisit.shift();
        for (let i in graph[node]) {
            const nextNode = graph[node][i];
            if (visited[nextNode] == null) {
                // 연결된 노드 중 방문하지 않은 노드 모두 추가
                visited[nextNode] = nextNode;
                needVisit.push(nextNode);
            }
        }
    }

    return Object.keys(visited);
}

console.log(
    bfs(
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
