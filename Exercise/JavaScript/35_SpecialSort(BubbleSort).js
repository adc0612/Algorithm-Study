/*
35. Special Sort(구글 인터뷰)
N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다. 
음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 
변함이 없어야 한다.
▣ 입력설명
첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진
다. 숫자 0은 입력되지 않는다.
▣ 출력설명
정렬된 결과를 출력한다.
▣ 입력예제 1 
8
1 2 3 -3 -2 5 6 -6
▣ 출력예제 1
-3 -2 -6 1 2 3 5 6
*/

// const n = 8
// const str = '1 2 3 -3 -2 5 6 -6';
const n = 50
const str = '-11 -10 12 2 13 10 -21 11 14 17 -15 -23 -4 -19 -17 -14 1 22 -24 19 2 -4 15 -2 11 -9 9 9 17 3 23 -6 1 -6 13 14 -20 4 3 1 10 -3 14 -9 5 -1 -12 -6 -6 22 ';

function solution(n, str) {
    const arr = str.split(' ', n).map(Number);
    // 음수는 왼쪽으로 양수는 오른쪽으로 순서에 변함없이 정렬해야한다.
    // 버블정렬로 왼쪽 수가 양수이고 오른쪽 수가 음수이면 둘이 swapping한다.
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let answer = solution(n, str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);