/*
32. 선택정렬
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 선택정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 
있습니다. 
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
▣ 입력예제 1 
6
13 5 11 7 23 15
▣ 출력예제 1
5 7 11 13 15 23
*/

const n = 6
const str = '13 5 11 7 23 15';

function solution(n, str) {
    const arr = str.split(' ', n).map(Number);
    // 선택 정렬
    // 맨 왼쪽 부터 정렬
    // i부터 맨끝 숫자까지 비교하며 제일 작은숫자를 맨 왼쪽부터 채운다.
    for (let i = 0; i < n; i++) {
        let idx = i;
        // i앞에 있는 숫자들이랑 비교하여 작은숫자가 있는 자리를 찾아 내 idx변수안에 넣어준다.
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[idx]) {
                idx = j;
            }
        }
        // j for loop이 끝나면 idx안에는 제일 작은 숫자가 있는 index가 담겨 있을거다.
        // 그래서 i자리에 있는 숫자랑 idx자리에 있는 숫자랑 swap해준다.
        let temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }
    return arr;
}

let answer = solution(n, str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);