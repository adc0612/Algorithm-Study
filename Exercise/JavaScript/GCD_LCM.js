/*
유클리드 호제법으로 최대공약수(GCD)와 최소공배수(LCM) 구하기
유클리드 호제법(-互除法, Euclidean algorithm) 또는 유클리드 알고리즘은 2개의 자연수 또는 정식(整式)의 최대공약수를 구하는 알고리즘의 하나이다. 
호제법이란 말은 두 수가 서로(互) 상대방 수를 나누어(除)서 결국 원하는 수를 얻는 알고리즘을 나타낸다. 
2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 
이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
*/

const n = 3;
const m = 12;
// const n = -42;
// const m = -56;

// function gcd(n1, n2) {
//     if (n2 === 0) {
//         return Math.abs(n1);
//     }
//     return gcd(n2, n1 % n2);
// }

// function solution(n, m) {
//     return [gcd(n, m), (n * m) / gcd(n, m)];
// }

// Programmers 에서 본 더 간단한 코드
// ternary operator 이용
// n2가 0이 아닐때 gcd함수로 리턴하고 0이면 n1을 리턴
// Math.abs써주는 이유는 최대공약수는 언제나 양수여야 하기 때문이다.
function gcd(n1, n2) {
    return n2 ? gcd(n2, n1 % n2) : Math.abs(n1);
}

function lcm(n1, n2) {
    return (n1 * n2) / gcd(n1, n2);
}

function solution(n, m) {
    return [gcd(n, m), lcm(n,m)];
}

let answer = solution(n, m);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);