/*
34. 버블정렬
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 버블정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 
있습니다. 
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
▣ 입력예제 1 
6
13 23 11 7 5 15
▣ 출력예제 1
5 7 11 13 15 23
*/

const n = 6
const str = '13 5 11 7 23 15';

function solution(n, str) {
    const arr = str.split(' ', n).map(Number);
    // 버블 정렬
    // 오른쪽 부터 정렬 된다.
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // arr[j]와 arr[j+1]를 비교하면서 arr[j]가 크면 swapping한다.
            // 즉 왼쪽과 오른쪽 수를 비교후 크면 오른쪽으로 swapping해서 보낸다.
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);
        }
    }
    return arr;
}

let answer = solution(n, str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);