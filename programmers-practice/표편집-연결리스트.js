// 프로그래머스 연습문제 - 표 편집
// https://programmers.co.kr/learn/courses/30/lessons/81303
// 연결리스트 사용

function solution(n, k, cmd) {
    let nodes = [];
    for (let i = 0; i < n; i++) {
        const node = new Node(i, null, null);
        nodes.push(node);
    }
    for (let i = 0; i < n; i++) {
        nodes[i].prev = nodes[i - 1];
        nodes[i].next = nodes[i + 1];
    }

    let currNode = nodes[k];
    let record = [];
    for (let i in cmd) {
        let [cmdWord, num] = cmd[i].split(' ');
        num = Number(num);
        switch (cmdWord) {
            case 'D':
                for (let i = 0; i < num; i++) {
                    currNode = currNode.next;
                }
                break;

            case 'U':
                for (let i = 0; i < num; i++) {
                    currNode = currNode.prev;
                }
                break;

            case 'C':
                record.push(currNode);
                if (currNode.next == null) {
                    currNode = currNode.prev;
                    currNode.next = null;
                } else if (currNode.prev == null) {
                    currNode = currNode.next;
                    currNode.prev = null;
                } else {
                    currNode.prev.next = currNode.next;
                    currNode.next.prev = currNode.prev;
                    currNode = currNode.next;
                }
                break;

            case 'Z':
                const node = record.pop();
                if (node.prev != null) {
                    node.prev.next = node;
                }
                if (node.next != null) {
                    node.next.prev = node;
                }
                break;
        }
    }

    let answer = new Array(n).fill('O');
    for (let i in record) {
        answer[record[i].idx] = 'X';
    }
    return answer.join('');
}

class Node {
    constructor(idx, prev, next) {
        this.idx = idx;
        this.prev = prev;
        this.next = next;
    }
}

console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
