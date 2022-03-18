// 프로그래머스 연습문제 - 정수 삼각형
// https://programmers.co.kr/learn/courses/30/lessons/43105
// 동적계획법 사용

function solution(triangle) {
    let record = Array.from(new Array(triangle.length), () => new Array(triangle[triangle.length - 1].length).fill(0));
    record[0][0] = triangle[0][0];

    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            record[i][j] = record[i - 1][j] + triangle[i][j];
            if (record[i - 1][j - 1] != null) {
                record[i][j] = Math.max(record[i][j], record[i - 1][j - 1] + triangle[i][j]);
            }
        }
    }

    return Math.max(...record[triangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
