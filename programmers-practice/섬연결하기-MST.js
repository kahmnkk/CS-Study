// 프로그래머스 연습문제 - 섬 연결하기
// https://programmers.co.kr/learn/courses/30/lessons/42861
// MST - Kruskal Algorithm 사용

function solution(n, costs) {
    let answer = 0;

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
            answer += costs[i][2];
            edgeCnt++;
            if (parentX < parentY) parents[parentY] = parentX;
            else parents[parentX] = parentY;
        }
        if (edgeCnt == n - 1) break;
    }

    return answer;
}

function getParent(node) {
    if (parents[node] == node) return node;
    else parents[node] = getParent(parents[node]);
    return parents[node];
}

console.log(
    solution(4, [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
        [1, 3, 1],
        [2, 3, 8],
    ]),
);
