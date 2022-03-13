/**
 * Linked List
 * 연결 리스트
 * JS에서 기본적으로 지원하지만 속도 개선을 위해 직접 구현
 * @param {Number} n 노드의 개수
 * @param {Array<String>} cmd 명령어
 */
function solution(n, cmd) {
    let nodes = [];
    for (let i = 0; i < n; i++) {
        const node = new Node(i, null, null);
        nodes.push(node);
    }
    for (let i = 0; i < n; i++) {
        nodes[i].prev = nodes[i - 1];
        nodes[i].next = nodes[i + 1];
    }

    let currNode = nodes[0];
    let record = [];
    for (let i in cmd) {
        let [cmdWord, num] = cmd[i].split(' ');
        num = Number(num);
        switch (cmdWord) {
            case 'N': // 다음 노드
                for (let i = 0; i < num; i++) {
                    currNode = currNode.next;
                }
                break;

            case 'P': // 이전 노드
                for (let i = 0; i < num; i++) {
                    currNode = currNode.prev;
                }
                break;

            case 'D': // 삭제
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

            case 'Z': // 복원
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

console.log(solution(8, ['N 2', 'D', 'P 3', 'D', 'N 4', 'D', 'P 2', 'Z', 'Z']));
