// 프로그래머스 연습문제 - 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165
// DFS 사용

let answer = 0;
let numbersArr = 0;
let targetNum = 0;

function solution(numbers, target) {
    numbersArr = numbers;
    targetNum = target;

    recursion(0, []);

    return answer;
}

function recursion(idx, result) {
    if (idx == numbersArr.length) {
        let num = 0;
        for (let i in result) {
            if (result[i] == true) num += numbersArr[i];
            else num -= numbersArr[i];
        }
        if (num == targetNum) {
            answer++;
        }
    } else {
        recursion(idx + 1, result.slice().concat([true]));
        recursion(idx + 1, result.slice().concat([false]));
    }
}

console.log(solution([1, 1, 1, 1, 1], 3));
