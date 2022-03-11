// 프로그래머스 연습문제 - N으로 표현
// https://programmers.co.kr/learn/courses/30/lessons/42895
// 동적계획법 사용

function solution(N, number) {
    let answer = -1;

    let record = {};
    for (let i = 1; i <= 8; i++) {
        const num = String(N).repeat(i);
        record[i] = { [num]: Number(num) };

        for (let j = 1; j <= 8; j++) {
            if (i <= j) {
                continue;
            }
            for (let k in record[j]) {
                for (let h in record[i - j]) {
                    let newNum = Number(k) + Number(h);
                    record[i][newNum] = newNum;
                    newNum = Number(k) - Number(h);
                    record[i][newNum] = newNum;
                    newNum = Number(k) * Number(h);
                    record[i][newNum] = newNum;
                    newNum = Number(k) / Number(h);
                    record[i][newNum] = newNum;
                }
            }
        }

        if (Object.values(record[i]).includes(number) == true) {
            answer = i;
            break;
        }
    }

    return answer;
}

// console.log(solution(5, 12));
console.log(solution(2, 11));
