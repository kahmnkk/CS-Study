// 프로그래머스 연습문제 - 다단계 칫솔 판매
// https://programmers.co.kr/learn/courses/30/lessons/77486
// 재귀 사용

let graph = {};
let record = {};

function solution(enroll, referral, seller, amount) {
    var answer = [];

    for (let i in enroll) {
        const parent = referral[i];
        if (parent == '-') {
            continue;
        }
        graph[enroll[i]] = parent;
    }

    for (let i in seller) {
        proc(seller[i], amount[i] * 100);
    }

    for (let i in enroll) {
        let res = record[enroll[i]];
        if (res == null) {
            res = 0;
        }
        answer.push(res);
    }

    return answer;
}

function proc(currSeller, amt) {
    if (record[currSeller] == null) {
        record[currSeller] = 0;
    }
    record[currSeller] += amt - Math.floor(amt * 0.1);

    if (graph[currSeller] != null && Math.floor(amt * 0.1) != 0) {
        proc(graph[currSeller], Math.floor(amt * 0.1));
    }
}

console.log(
    solution(
        ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
        ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
        ['young', 'john', 'tod', 'emily', 'mary'],
        [12, 4, 2, 5, 10],
    ),
);
