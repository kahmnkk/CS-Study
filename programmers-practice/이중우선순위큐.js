// 프로그래머스 연습문제 - 이중우선순위큐
// https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
    var answer = [];

    let queue = [];
    for (let i in operations) {
        const [cmd, num] = operations[i].split(' ');
        if (cmd == 'I') {
            queue.push(Number(num));
            queue.sort((a, b) => {
                return a - b;
            });
        } else if (num == '1') {
            queue.pop();
        } else {
            queue.shift();
        }
    }

    if (queue.length == 0) {
        answer = [0, 0];
    } else {
        answer = [queue[queue.length - 1], queue[0]];
    }

    return answer;
}

// console.log(solution(['I 16', 'D 1']));
console.log(solution(['I 7', 'I 5', 'I -5', 'D -1']));
