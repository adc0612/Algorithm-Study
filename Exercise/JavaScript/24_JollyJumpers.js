/*
24. Jolly Jumpers
N개의 정수로 이루어진 수열에 대해 서로 인접해 있는 두 수의 차가 1에서 N-1까지의 값을 
모두 가지면 그 수열을 유쾌한 점퍼(jolly jumper)라고 부른다. 예를 들어 다음과 같은 수열에
서 1 4 2 3 앞 뒤에 있는 숫자 차의 절대 값이 각각 3 ,2, 1이므로 이 수열은 유쾌한 점퍼가 
된다. 어떤 수열이 유쾌한 점퍼인지 판단할 수 있는 프로그램을 작성하라.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=100)이 주어진다.
그 다음 줄에 N개의 정수가 주어진다. 정수의 크기는 int 형 범위안에 있습니다.
▣ 출력설명
유쾌한 점퍼이면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력한다.
▣ 입력예제 1 
5 
1 4 2 3 7
▣ 출력예제 1
YES
*/

const n = 5;
const str = '1 5 2 3 7';
// const n = 90;
// const str = '0 1 3 6 10 15 21 28 36 45 55 66 78 91 105 120 136 153 171 190 210 231 253 276 300 325 351 378 406 435 465 496 528 561 595 630 666 703 741 780 820 861 903 946 990 1035 1081 1128 1176 1225 1275 1326 1378 1431 1485 1540 1596 1653 1711 1770 1830 1891 1953 2016 2080 2145 2211 2278 2346 2415 2485 2556 2628 2701 2775 2850 2926 3003 3081 3160 3240 3321 3403 3486 3570 3655 3741 3828 3916 4005';
// const n = 10;
// const str = '-5 -9 -12 -14 -15 -10 -4 3 11 20';

function solution(n, str) {
    const arr = str.split(' ', n).map(Number);
    const chk = Array.from({
        length: n
    }, () => 0);
    for (let i = 1; i < n; i++) {
        let sub = Math.abs(arr[i] - arr[i - 1]);
        if (sub > 0 && sub < n && chk[sub] === 0) {
            chk[sub]++;
        } else {
            return "NO";
        }
    }
    return "YES";
}
let answer = solution(n, str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);