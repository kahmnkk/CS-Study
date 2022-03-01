/**
 * 깊이 우선 탐색
 * 경로 존재 판별 등에 사용
 * @param {Array<Array<Number>>} graph i번 노드와 j번 노드가 연결되어 있으면 graph[i][j]를 1로 표현
 *                                     graph[i][i]]는 1로 표현
 * @param {Number} startNode 시작 노드
 */
function dfs(graph, startNode) {
    let visited = [];

    recursion(graph, startNode, visited);

    return visited;
}

function recursion(graph, startNode, visited) {
    if (visited.includes(startNode) == true) {
        return;
    }

    visited.push(startNode);

    for (let i in graph[startNode]) {
        if (Number(i) == startNode) {
            continue;
        }
        if (graph[startNode][i] == 1) {
            recursion(graph, Number(i), visited);
        }
    }
}

// console.log(
//     dfs(
//         [
//             [1, 1, 1, 0, 0, 0],
//             [1, 1, 0, 1, 1, 0],
//             [1, 0, 1, 0, 0, 1],
//             [0, 1, 0, 1, 0, 0],
//             [0, 1, 0, 0, 1, 0],
//             [0, 0, 1, 0, 0, 1],
//         ],
//         0,
//     ),
// );
// console.log(
//     dfs(
//         [
//             [1, 1, 0],
//             [1, 1, 0],
//             [0, 0, 1],
//         ],
//         0,
//     ),
// );
