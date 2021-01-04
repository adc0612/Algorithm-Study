/*
40. 교집합(투포인트 알고리즘)
두 집합 A, B가 주어지면 두 집합의 교집합을 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명
두 집합의 교집합을 오름차순 정렬하여 출력합니다.
▣ 입력예제 1 
5
2 7 10 5 3
5
3 10 5 17 12
▣ 출력예제 1
3 5 10
*/

const n = 5;
const m = 5;
const str1 = '2 7 10 5 3';
const str2 = '3 10 5 17 12';

function solution(n, m, str1, str2) {
    const arr1 = str1.split(' ', n).map(Number);
    const arr2 = str2.split(' ', m).map(Number);

    // 기본 내장 함수 sort로 배열들을 오름차순으로 정렬
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    console.log(arr1);
    console.log(arr2);

    // 두 배열에 교집합을 넣을 배열 선언
    const intersectionArr = [];

    // 두 배열의 pointer변수 선언
    let pnt1 = 0,
        pnt2 = 0;
    console.log(intersectionArr);

    // 두 배열중 한 배열 요소들이 비교 될 때까지 돌린다.
    while (pnt1 < n && pnt2 < m) {
        if (arr1[pnt1] === arr2[pnt2]) {
            console.log(intersectionArr);
            intersectionArr.push(arr1[pnt1++]);
            pnt2++;
        } else if (arr1[pnt1] < arr2[pnt2]) {
            pnt1++;
        } else {
            pnt2++;
        }
    }

    return intersectionArr;
}

let answer = solution(n, m, str1, str2);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);