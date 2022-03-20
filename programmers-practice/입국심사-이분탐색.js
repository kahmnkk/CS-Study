// 프로그래머스 연습문제 - 입국심사
// https://programmers.co.kr/learn/courses/30/lessons/43238
// 이분 탐색 사용

function solution(n, times) {
    times = times.sort((a, b) => {
        return a - b;
    });

    let start = 0;
    let end = n * times[times.length - 1];
    let answer = end;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2); // 총 심사 시간
        let totalN = 0; // 총 심사 시간 동안 심사 가능한 인원수
        for (let i in times) {
            totalN += Math.floor(mid / times[i]);
        }
        if (totalN >= n) {
            answer = Math.min(answer, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return answer;
}

console.log(solution(6, [7, 10]));
