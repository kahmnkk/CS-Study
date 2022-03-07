// 프로그래머스 연습문제 - 디스크 컨트롤러
// https://programmers.co.kr/learn/courses/30/lessons/42627
// 그리디 알고리즘 사용

function solution(jobs) {
    var answer = 0;

    let currtime = 0;
    let totalTime = 0;
    let startTimes = jobs.sort((a, b) => {
        return a[0] - b[0];
    });

    while (true) {
        const newJobs = startTimes
            .filter((x) => x[0] <= currtime)
            .sort((a, b) => {
                return a[1] - b[1];
            });
        const restJobs = startTimes.filter((x) => x[0] > currtime);
        if (newJobs.length == 0) {
            // 현재 수행할 작업이 없으면 가장 가까운 작업으로
            currtime = restJobs[0][0];
            continue;
        }

        currtime += newJobs[0][1];
        totalTime += currtime - newJobs[0][0];

        startTimes = newJobs.slice(1).concat(restJobs);
        if (startTimes.length == 0) {
            break;
        }
    }

    answer = Math.floor(totalTime / jobs.length);

    return answer;
}

console.log(
    solution([
        [0, 3],
        [1, 9],
        [2, 6],
    ]),
);
