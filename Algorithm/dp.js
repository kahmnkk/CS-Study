/**
 * Dynamic Programming
 * 동적계획법
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

/**
 * 연속된 index를 선택하지 않고 가장 합이 높은 값 찾기
 * @param {Number} num
 * @returns
 */
function dpExample(num) {
    // 임시 데이터
    let arr = [];
    for (let i = 0; i < num; i++) arr.push(getRandomNumber(0, 100));

    let record = {};
    record[0] = arr[0];
    record[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < num; i++) {
        record[i] = Math.max(record[i - 2] + arr[i], record[i - 1]);
    }

    return record[num - 1];
}

function getRandomNumber(min, max) {
    if (min == max) {
        return min;
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

/**
 * 5로 나누거나, 3으로 나누거나, 2로 나누거나, 1을 빼는 연산 중
 * 최소 개수의 연산으로 1로 만들기
 * 밑에서부터 계산
 * @param {Number} num
 * @returns
 */
function dpExample2(num) {
    let record = {};
    record[1] = 0;

    for (let i = 2; i <= num; i++) {
        // 만족하는 연산 중 가장 작은거 찾기
        record[i] = i;

        record[i] = Math.min(record[i], record[i - 1] + 1); // 1을 빼는 경우

        if (i % 2 == 0) record[i] = Math.min(record[i], record[Math.floor(i / 2)] + 1); // 2로 나누는 경우

        if (i % 3 == 0) record[i] = Math.min(record[i], record[Math.floor(i / 3)] + 1); // 3로 나누는 경우

        if (i % 5 == 0) record[i] = Math.min(record[i], record[Math.floor(i / 5)] + 1); // 5로 나누는 경우
    }

    return record[num];
}

/**
 * N가지 종류의 화폐를 사용하여 target 원을 만들기 위한 최소한의 화폐의 개수 구하기
 * @param {Array<Number>} coins
 * @param {Number} target
 * @param {Object} record
 * @returns
 */
function dpExample3(coins, target) {
    const INF = 100000000;

    coins = coins.sort((a, b) => {
        return a - b;
    });

    let record = {};
    for (let i in coins) {
        record[coins[i]] = 1;
    }

    for (let i = coins[0]; i <= target; i++) {
        // 만족하는 연산 중 가장 작은거 찾기
        record[i] = record[i] ? record[i] : INF;

        for (let j in coins) {
            if (record[i - coins[j]] == null) continue;
            record[i] = Math.min(record[i], record[i - coins[j]] + 1);
        }
    }

    return record[target]; // 결과값이 INF면 만들 수 없는 동전
}

console.log(dp(50));
console.log(dpExample(100));
console.log(dpExample2(50));
console.log(dpExample3([2, 5, 10], 51));
