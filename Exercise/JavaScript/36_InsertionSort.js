/*
36. 삽입정렬
N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 삽입정렬입니다.
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 
있습니다. 
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
▣ 입력예제 1 
6
11 7 5 6 10 9
▣ 출력예제 1
5 6 7 9 10 11
*/

const n = 6
const str = '13 5 11 7 23 15';

function solution(n, str) {
    const arr = str.split(' ', n).map(Number);
    // 삽입 정렬
    // 왼쪽부터 정렬 된다.
    // i위치에 있는 숫자를 먼저 temp에 담는다.
    // i위치 앞에 있는 숫자부터 살펴보면서 큰수가 있으면 옆으로 옮기면서 덮어 써준다.
    // 먼저 i위치에 있는 숫자를 temp에 저장했어서 바로 숫자를 옆에 있는 위치에 덮어 씌워줄 수 있다.
    // 만약 큰 수 가 없으면 break해주고 j+1에다 그 수를 넣어준다.
    // j+1위치는 temp 숫자가 들어갈 자리다. 
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            // 
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = temp;
    }
    return arr;
}

let answer = solution(n, str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);