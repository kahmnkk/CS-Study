// 프로그래머스 연습문제 - 기지국 설치
// https://programmers.co.kr/learn/courses/30/lessons/12979

function solution(n, stations, w) {
    var answer = 0;

    if (stations[0] - w > 1) {
        answer += Math.ceil((stations[0] - w - 1) / (2 * w + 1));
    }
    if (stations[stations.length - 1] + w < n) {
        answer += Math.ceil((n - stations[stations.length - 1] - w) / (2 * w + 1));
    }
    for (let i = 0; i < stations.length - 1; i++) {
        if (stations[i] + w + 1 < stations[i + 1] - w) {
            answer += Math.ceil((stations[i + 1] - w - stations[i] - w - 1) / (2 * w + 1));
        }
    }

    return answer;
}

console.log(solution(11, [4, 11], 1));
