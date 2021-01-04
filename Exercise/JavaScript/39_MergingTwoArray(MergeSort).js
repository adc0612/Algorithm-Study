/*
39. 두 배열 합치기
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램
을 작성하세요.
▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 배열의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.
▣ 입력예제 1 
3
1 3 5
5
2 3 6 7 9
▣ 출력예제 1
1 2 3 3 5 6 7 9
*/

const n = 3;
const m = 5;
const str1 = '1 3 10';
const str2 = '2 3 6 7 9';

function solution(n, m, str1, str2) {
    const arr1 = str1.split(' ', n).map(Number);
    const arr2 = str2.split(' ', m).map(Number);

    const sortedArr = Array.from({
        length: n + m
    }, () => 0);

    let pnt1 = 0,
        pnt2 = 0,
        pnt3 = 0;

    // 두 배열 중 한 배열이 새배열에 다 들어갈때 까지 while loop이 돌아간다.
    while (pnt1 < n && pnt2 < m) {
        // 만약 arr1에 들은 숫자가 작을 시에는 arr1배열 숫자가 들어간다.
        if (arr1[pnt1] < arr2[pnt2]) {
            console.log(`pnt3: ${pnt3} pnt1: ${pnt1}`);
            sortedArr[pnt3++] = arr1[pnt1++];
        } else {
            // 만약 arr2에 들은 숫자가 작거나 같을시에는 arr2배열 숫자가 들어간다.
            console.log(`pnt3: ${pnt3} pnt2: ${pnt2}`);
            sortedArr[pnt3++] = arr2[pnt2++];
        }
    }
    console.log(`pnt1: ${pnt1} pnt2: ${pnt2} pnt3: ${pnt3} `);

    // pnt1이 n보다 작으면 pnt1에 있는 숫자들이 새로운 정렬 배열에 다 안들어 간것이므로 다 넣어준다.
    while (pnt1 < n)
        sortedArr[pnt3++] = arr1[pnt1++];
    
    // pnt2이 m보다 작으면 pnt2에 있는 숫자들이 새로운 정렬 배열에 다 안들어 간것이므로 다 넣어준다.
    while (pnt2 < m)
        sortedArr[pnt3++] = arr2[pnt2++];

    return sortedArr;
}

let answer = solution(n, m, str1, str2);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);