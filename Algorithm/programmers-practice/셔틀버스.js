// 프로그래머스 연습문제 - 셔틀버스
// https://programmers.co.kr/learn/courses/30/lessons/17678

function solution(n, t, m, timetable) {
    let answer = '';

    timetable = timetable.sort();

    let busTime = '09:00';
    for (let i = 0; i < n - 1; i++) {
        busTime = calTime(i * t);

        let count = 0;
        for (let j in timetable) {
            if (timetable[j] <= busTime) {
                count++;
            }
            if (count == m || timetable[j] > busTime) {
                timetable = timetable.slice(count);
                break;
            }
        }
    }

    const nextBusTime = calTime((n - 1) * t);
    let count = 0;
    for (let i in timetable) {
        if (timetable[i] <= nextBusTime) {
            count++;
        } else {
            timetable = timetable.slice(0, count);
            break;
        }
    }

    if (timetable.length < m) {
        answer = nextBusTime;
    } else {
        answer = subTime(timetable[m - 1], -1);
    }

    return answer;
}

function calTime(addTime) {
    let hour = Math.floor(addTime / 60) + 9;
    let min = addTime % 60;

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }

    return hour + ':' + min;
}

function subTime(currTime, t) {
    let hour = Number(currTime.split(':')[0]);
    let min = Number(currTime.split(':')[1]);

    if (min == 0) {
        hour -= 1;
        min = 59;
    } else {
        min -= 1;
    }

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (min < 10) {
        min = '0' + min;
    }

    return hour + ':' + min;
}

// console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']));
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
