let order = [];

/**
 * Permutation
 * 순열 - 완전탐색
 * @param {Number} n 번호의 개수
 * @param {Number} k 순서대로 나열했을 때 몇 번째인지
 */
function permutation(n, k) {
    var answer = [];

    let rest = {};
    let temp = [];
    for (let i = 1; i <= n; i++) {
        rest[i] = i;
    }
    recursion(temp, rest);
    answer = order[k - 1];

    return answer;
}

function recursion(curr, rest) {
    if (Object.keys(rest).length == 0) {
        order.push(curr);
    } else {
        for (let i in rest) {
            let newCurr = curr.slice();
            newCurr.push(rest[i]);
            let newRest = Object.assign({}, rest);
            delete newRest[i];
            recursion(newCurr, newRest);
        }
    }
}

console.log(permutation(4, 7));
