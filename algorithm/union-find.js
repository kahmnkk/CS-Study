/**
 * Union-Find
 * 합집합 찾기
 * @param {Object<Array<Number>>} graph graph[node] 배열은 node와 연결되어 있는 노드들의 배열이다.
 */
function unionFind(graph) {
    let parents = new Array(Object.values(graph).length + 1);
    for (let i = 0; i < parents.length; i++) parents[i] = i;

    for (let node in graph) {
        for (let i in graph[node]) {
            unionParent(parents, Number(node), graph[node][i]);
        }
    }

    const answer = cmpParent(parents, 3, 5);
    return answer;
}

function getParent(parents, node) {
    if (parents[node] == node) return node;
    else parents[node] = getParent(parents, parents[node]);
    return parents[node];
}

function unionParent(parents, nodeX, nodeY) {
    const parentX = getParent(parents, nodeX);
    const parentY = getParent(parents, nodeY);
    if (parentX < parentY) parents[parentY] = parentX;
    else if (parentX > parentY) parents[parentX] = parentY;
    // 이때 중복된 간선이 없고 parentX == parentY이면 사이클
}

function cmpParent(parents, nodeX, nodeY) {
    const parentX = getParent(parents, nodeX);
    const parentY = getParent(parents, nodeY);
    if (parentX == parentY) return true;
    return false;
}

console.log(
    unionFind({
        1: [3, 2],
        2: [3, 1],
        3: [2, 1],
        4: [5, 6],
        5: [4],
        6: [4],
    }),
);
