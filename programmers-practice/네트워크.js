// 프로그래머스 연습문제 - 네트워크
// https://programmers.co.kr/learn/courses/30/lessons/43162
// 깊이 우선 탐색 (DFS) 사용

function solution(n, computers) {
    let answer = 0;

    let visited = [];
    for (let i in computers) {
        let isNew = dfs(computers, Number(i), visited);
        if (isNew == true) {
            answer++;
        }
    }

    return answer;
}

function dfs(graph, startNode, visited) {
    if (visited.includes(startNode) == true) {
        return false;
    }

    visited.push(startNode);

    for (let i in graph[startNode]) {
        if (Number(i) == startNode) {
            continue;
        }
        if (graph[startNode][i] == 1) {
            dfs(graph, Number(i), visited);
        }
    }

    return true;
}

console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ]),
);
