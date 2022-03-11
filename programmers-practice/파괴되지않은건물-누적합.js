// 프로그래머스 연습문제 - 파괴되지 않은 건물
// https://programmers.co.kr/learn/courses/30/lessons/92344
// 누적합 사용

function solution(board, skill) {
    let answer = 0;
    let prefixSum = new Array(board.length + 1);
    for (let i = 0; i < prefixSum.length; i++) {
        prefixSum[i] = new Array(board[0].length + 1).fill(0);
    }

    for (let i in skill) {
        const type = skill[i][0];
        const x1 = skill[i][1];
        const y1 = skill[i][2];
        const x2 = skill[i][3];
        const y2 = skill[i][4];
        let value = skill[i][5];
        if (type == 1) value *= -1;

        prefixSum[x1][y1] += value;
        prefixSum[x2 + 1][y1] -= value;
        prefixSum[x1][y2 + 1] -= value;
        prefixSum[x2 + 1][y2 + 1] += value;
    }

    // 실제 누적된 값 계산
    for (let i = 1; i < prefixSum.length; i++) {
        for (let j = 0; j < prefixSum[0].length; j++) {
            prefixSum[i][j] += prefixSum[i - 1][j];
        }
    }
    for (let j = 1; j < prefixSum[0].length; j++) {
        for (let i = 0; i < prefixSum.length; i++) {
            prefixSum[i][j] += prefixSum[i][j - 1];
        }
    }

    for (let i in board) {
        for (let j in board[i]) {
            if (board[i][j] + prefixSum[i][j] > 0) answer++;
        }
    }

    return answer;
}

console.log(
    solution(
        [
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
        ],
        [
            [1, 0, 0, 3, 4, 4],
            [1, 2, 0, 2, 3, 2],
            [2, 1, 0, 3, 1, 2],
            [1, 0, 1, 3, 3, 1],
        ],
    ),
);

// console.log(
//     solution(
//         [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, 9],
//         ],
//         [
//             [1, 1, 1, 2, 2, 4],
//             [1, 0, 0, 1, 1, 2],
//             [2, 2, 0, 2, 0, 100],
//         ],
//     ),
// );
