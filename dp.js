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

console.log(dp(30));
