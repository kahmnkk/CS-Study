/**
 * Prefix Sum
 * 누적합
 * @param {Number} n 배열의 크기
 */
function prefixSum1(n) {
    // --------- 1차원 누적합 ---------
    let arr = new Array(n).fill(0);

    // 임의의 수열 생성
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }

    // 누적합 계산
    let sum = arr.slice();
    for (let i = 1; i < n; i++) {
        sum[i] += sum[i - 1];
    }

    // 특정 구간의 합 - i ~ j까지의 합
    const i = 2;
    const j = 4;
    const result = sum[j] - sum[i - 1];

    return result;
}

function prefixSum2(n, m) {
    // --------- 2차원 누적합 ---------
    let arr = Array.from(new Array(m), () => new Array(n).fill(0));

    // 임의의 수열 생성
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = i + j;
        }
    }

    // 누적합 계산 - sum[i][j] = arr[0][0] + ... + arr[i][j]
    let sum = [];
    for (let i = 0; i < m; i++) {
        sum.push(arr[i].slice());
    }
    // 가로 합
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            sum[i][j] += sum[i][j - 1];
        }
    }
    // 세로 합
    for (let j = 0; j < n; j++) {
        for (let i = 1; i < m; i++) {
            sum[i][j] += sum[i - 1][j];
        }
    }

    // 특정 구간의 합 - x1y1 ~ x2y2까지의 합
    const x1 = 1;
    const x2 = 2;
    const y1 = 2;
    const y2 = 3;
    const a1 = sum[x2][y2];
    const a2 = sum[x2][y1 - 1] ? sum[x2][y1 - 1] : 0;
    const a3 = sum[x1 - 1][y2] ? sum[x1 - 1][y2] : 0;
    const a4 = sum[x1 - 1][y1 - 1] ? sum[x1 - 1][y1 - 1] : 0;
    const result = a1 - a2 - a3 + a4;

    return result;
}

/**
 * Prefix Sum
 * 변화량의 누적합
 * @param {Number} n 배열의 크기
 */
function prefixSum3(n) {
    // --------- 1차원 변화량의 누적합 ---------
    let arr = new Array(n).fill(0);
    let sum = new Array(n + 1).fill(0);

    // 임의의 수열 생성
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }

    // 특정 구간 변화량 저장 - i ~ j까지의 변화
    let i = 2;
    let j = 4;
    let val = 2;
    sum[i] += val;
    sum[j + 1] -= val;
    i = 3;
    j = 4;
    val = -1;
    sum[i] += val;
    sum[j + 1] -= val;

    // 변화 결과
    for (let i = 1; i < sum.length; i++) {
        sum[i] += sum[i - 1];
    }

    // 최종 결과 - 2 ~ 4: +2, 3 ~ 4: -1
    for (let i = 0; i < n; i++) {
        arr[i] += sum[i];
    }

    return arr;
}

function prefixSum4(n, m) {
    // --------- 2차원 변화량의 누적합 ---------
    let arr = Array.from(new Array(m), () => new Array(n).fill(0));
    let sum = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

    // 임의의 수열 생성
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = i + j;
        }
    }

    // 특정 구간 변화량 저장 - x1y1 ~ x2y2까지의 변화
    operate(sum, 1, 2, 2, 3, 2);
    operate(sum, 2, 3, 2, 3, -1);

    // 변화 결과
    // 가로 합
    for (let i = 0; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            sum[i][j] += sum[i][j - 1];
        }
    }
    // 세로 합
    for (let j = 0; j < n + 1; j++) {
        for (let i = 1; i < m + 1; i++) {
            sum[i][j] += sum[i - 1][j];
        }
    }

    // 최종 결과
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] += sum[i][j];
        }
    }

    return arr;
}
function operate(sum, x1, x2, y1, y2, value) {
    sum[x1][y1] += value;
    sum[x2 + 1][y1] -= value;
    sum[x1][y2 + 1] -= value;
    sum[x2 + 1][y2 + 1] += value;
}

console.log(prefixSum1(5));
console.log(prefixSum2(5, 4));
console.log(prefixSum3(5));
console.log(prefixSum4(5, 4));
