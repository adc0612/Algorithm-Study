/*
조세퍼스 문제 
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	10565	5229	4050	51.770%
문제
조세퍼스 문제는 다음과 같다.

1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고, 양의 정수 M(≤ N)이 주어진다. 
이제 순서대로 M번째 사람을 제거한다. 
한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다. 
이 과정은 N명의 사람이 모두 제거될 때까지 계속된다. 
원에서 사람들이 제거되는 순서를 (N, M)-조세퍼스 순열이라고 한다. 
예를 들어 (7, 3)-조세퍼스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.

N과 M이 주어지면 (N,M)-조세퍼스 순열을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 M이 빈 칸을 사이에 두고 순서대로 주어진다. (1 ≤ M ≤ N ≤ 5,000)

출력
예제와 같이 조세퍼스 순열을 출력한다.

예제 입력 1 
7 3
예제 출력 1 
<3, 6, 2, 7, 5, 1, 4>
*/

const str = '7 3';

function solution1(str) {
    const tempArr = str.split(' ').map(Number);
    const n = tempArr[0];
    const m = tempArr[1];

    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    let ans = '<';
    for (let i = 1; i <= n; i++) {
        // m-1만큼 loop돌기
        for (let j = 1; j < m; j++) {
            arr.push(arr.shift());
        }
        if (i != n) {
            ans += `${arr.shift()}, `;
        } else {
            ans += `${arr.shift()}>`;
        }
    }
    return ans;
}

function solution2(str) {
    const tempArr = str.split(' ').map(Number);
    const n = tempArr[0];
    const m = tempArr[1];

    // checkArr 배열을 선언
    // 배열안에 0으로 초기화
    // 0으로 가진 요소들만 m번 loop를 돌며 checkArr 배열에 있는 m번째 요소에 1을 넣고 ans에 넣는다.
    // 계속 0으로 가진 요소들만 탐색한다.
    // 배열 끝으로 갔을때 다시 첫번째 요소로 넘어가도록 셋팅해준다.
    // 한 요소빼고 전부 1이 들어가 있을 것이다.
    // 0인 요소의 배열위치를 마지막으로 ans에 담아 넣는다.
    const checkArr = Array.from({
        length: n + 1
    }, () => 0);

    let pos = 1,
        cnt = 0,
        ans = '<',
        breakPoint = 0;
    while (1) {
        if (pos > n) {
            pos = 1;
        }
        if (checkArr[pos] === 0) {
            cnt++;
            if (cnt === m) {
                checkArr[pos] = 1;
                ans += `${pos}, `;
                breakPoint++;
                cnt = 0;
            }

        }
        if (breakPoint === n-1) {
            break;
        }
        pos++;
    }

    for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 0) {
            ans += `${i}>`;
        }
    }

    return ans;
}

let answer = solution2(str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);