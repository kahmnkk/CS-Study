/**
 * Breadth-First Search
 * 너비 우선 탐색
 * @param {Array<Array<Number>>} graph i번 노드와 j번 노드가 연결되어 있으면 graph[i][j]를 1로 표현
 *                                     graph[i][i]]는 1로 표현
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
            if (Number(i) == node) {
                continue;
            }
            if (graph[node][i] == 1 && visited[i] == null) {
                // 연결된 노드 중 방문하지 않은 노드 모두 추가
                visited[i] = Number(i);
                needVisit.push(Number(i));
            }
        }
    }

    return Object.keys(visited);
}

console.log(
    bfs(
        [
            [1, 1, 1, 0, 0, 0],
            [1, 1, 0, 1, 1, 0],
            [1, 0, 1, 0, 0, 1],
            [0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1],
        ],
        0,
    ),
);
