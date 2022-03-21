let parents = [];
/**
 * Minimum Spanning Tree
 * 최소 신장 트리
 * Kruskal Algorithm, 크루스칼 알고리즘 사용
 * @param {Number} n 노드의 개수
 * @param {Array<Array<Number>>} costs costs[i][0], costs[i][1]은 노드의 번호, costs[i][2]는 두 노드를 잇는 간선의 비용
 */
function kruskal(n, costs) {
    let totalCost = 0;

    for (let i = 0; i < n; i++) parents.push(i);

    // 비용이 적은 간선 순으로 정렬
    costs = costs.sort((a, b) => {
        return a[2] - b[2];
    });

    let edgeCnt = 0;
    for (let i in costs) {
        const parentX = getParent(costs[i][0]);
        const parentY = getParent(costs[i][1]);
        if (parentX != parentY) {
            // 사이클이 만들지 않을 경우
            totalCost += costs[i][2];
            edgeCnt++;
            if (parentX < parentY) parents[parentY] = parentX;
            else parents[parentX] = parentY;
        }
        if (edgeCnt == n - 1) break;
    }

    return totalCost;
}

function getParent(node) {
    if (parents[node] == node) return node;
    else parents[node] = getParent(parents[node]);
    return parents[node];
}

console.log(
    kruskal(4, [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
        [1, 3, 1],
        [2, 3, 8],
    ]),
);
