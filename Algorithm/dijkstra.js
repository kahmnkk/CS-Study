const INF = 10000000;

/**
 * Dijkstra
 * 다익스트라
 * @param {Number} number 노드의 개수
 * @param {Array<Array<Number>>} graph graph i번 노드와 j번 노드의 가중치를 graph[i][j]로 표현
 *                                     graph[i][i]가 -1이면 연결되어 있지 않은 노드
 * @param {Number} startNode 시작 노드
 */
function dijkstra(number, graph, startNode) {
    let visited = {}; // 방문한 노드
    let cost = {}; // 시작 노드부터의 최소 거리

    for (let i in graph[startNode]) {
        cost[i] = graph[startNode][i];
    }
    visited[startNode] = startNode;

    for (let i = 0; i < number - 1; i++) {
        const node = getMinIdx(number, visited, cost);
        visited[node] = node;
        for (let j = 0; j < number; j++) {
            if (visited[j] != null) continue;

            cost[j] = Math.min(cost[j], cost[node] + graph[j][node]);
        }
    }

    return Object.values(cost);
}

function getMinIdx(number, visited, cost) {
    let min = INF;
    let idx = -1;
    for (let i = 0; i < number; i++) {
        if (visited[i] == null && cost[i] < min) {
            min = cost[i];
            idx = i;
        }
    }
    return idx;
}

console.log(
    dijkstra(
        6,
        [
            [0, 2, 5, 1, INF, INF],
            [2, 0, 3, 2, INF, INF],
            [5, 3, 0, 3, 1, 5],
            [1, 2, 3, 0, 1, INF],
            [INF, INF, 1, 1, 0, 2],
            [INF, INF, 5, INF, 2, 0],
        ],
        0,
    ),
);
