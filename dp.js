/**
 * Dynamic Programming
 * 동적계획법
 * 큰 문제를 작은 문제로 나누어서 해결
 * 전에 계산한 값을 저장(Memoization)한다는 점이 분할정복과 다름
 * 피보나치 수열, 배낭 문제 등에서 사용
 * @param {Number} num
 */
function dp(num) {
    let record = {};
    return fibonacci(num, record);
}

function fibonacci(num, record) {
    if (num == 1) return 1;
    if (num == 2) return 1;
    if (record[num] != null) return record[num];

    record[num] = fibonacci(num - 1, record) + fibonacci(num - 2, record);
    return record[num];
}

console.log(dp(30));
