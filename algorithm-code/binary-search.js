/**
 * Binary Search
 * 이분 탐색
 * @param {Number} n
 * @param {Number} target
 */
function binarySearch(n, target) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(i);

    let answer = -1;
    answer = bsWhile(arr, target, 0, n - 1);
    // answer = bsRecursion(arr, target, 0, n - 1);

    return answer;
}

function bsWhile(arr, target, start, end) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1; // target이 없을 경우
}

function bsRecursion(arr, target, start, end) {
    if (start > end) return -1; // target이 없을 경우

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] > target) {
        return bsRecursion(arr, target, start, mid - 1);
    } else {
        return bsRecursion(arr, target, mid + 1, end);
    }
}

console.log(binarySearch(100000000, 5972));
