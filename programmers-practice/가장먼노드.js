// 프로그래머스 연습문제 - 가장 먼 노드
// https://programmers.co.kr/learn/courses/30/lessons/49189
// 너비 우선 탐색 (BFS) 사용

function solution(n, edge) {
    let answer = 0;

    let graph = {};
    for (let i in edge) {
        if (graph[edge[i][0]] == null) {
            graph[edge[i][0]] = [];
        }
        if (graph[edge[i][1]] == null) {
            graph[edge[i][1]] = [];
        }
        graph[edge[i][0]].push(edge[i][1]);
        graph[edge[i][1]].push(edge[i][0]);
    }

    let visited = {};
    let needVisit = [];

    needVisit.push(1);
    visited[1] = 0;

    while (needVisit.length != 0) {
        const node = needVisit.shift();
        for (let i in graph[node]) {
            if (visited[graph[node][i]] == null) {
                visited[graph[node][i]] = visited[node] + 1;
                needVisit.push(graph[node][i]);
            }
        }
    }

    const longest = Math.max(...Object.values(visited));

    for (let i in visited) {
        if (visited[i] == longest) {
            answer++;
        }
    }

    return answer;
}

console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ]),
);
