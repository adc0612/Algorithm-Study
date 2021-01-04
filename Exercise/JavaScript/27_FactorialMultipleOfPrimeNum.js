/*
27. N!의 표현법
임의의 N에 대하여 N!은 1부터 N까지의 곱을 의미한다. 이는 N이 커짐에 따라 급격하게 커진
다. 이러한 큰 수를 표현하는 방법으로 소수들의 곱으로 표현하는 방법이 있다. 먼저 소수는 
2, 3, 5, 7, 11, 13... 순으로 증가함을 알아야 한다. 예를 들면 825는 (0 1 2 0 1)로 표현이 
가능한데, 이는 2는 없고 3은 1번, 5는 2번, 7은 없고, 11은 1번의 곱이라는 의미이다. 101보
다 작은 임의의 N에 대하여 N 팩토리얼을 이와 같은 표기법으로 변환하는 프로그램을 작성해 
보자. 출력은 아래 예제와 같이 하도록 한다.
▣ 입력설명
첫 줄에 자연수 N(3<=N<=1000)이 입력된다.
▣ 출력설명
소수의 곱으로 표현한다.
▣ 입력예제 1 
5
▣ 출력예제 1
5! = 3 1 1
▣ 입력예제 2 
53
▣ 출력예제 2
53! = 49 23 12 8 4 4 3 2 2 1 1 1 1 1 1 1
*/

const n = 5;

// 소수 배열을 생성한뒤 해당 소수가 쓰이면 해당 숫자 배열에 1씩 증가해준다.
function solution(n) {
    const primeNumArr = Array.from({
        length: n + 1
    }, () => 0);
    // 소수는 2부터
    for (let i = 2; i <= n; i++) {
        // 소수는 2부터
        let j = 2;
        let tempNum = i;
        while (1) {
            // 2부터 나눠지는지 확인 한 후 나눠질때까지 나눈다.
            if (tempNum % j === 0) {
                tempNum /= j;
                primeNumArr[j]++;
            } 
            // 숫자를 1씩 올리면서 while loop을 다시 진행한다.
            else {
                j++;
            }
            // 만약 나눠지는 수가 1이면 while문을 break를 한다.
            if (tempNum === 1) {
                break;
            }
        }
    }
    let ans = '';
    primeNumArr.forEach(element => {
        if (element != 0) {
            ans += `${element} `;
        }
    });

    return `${n}! = ${ans}`;
}
let answer = solution(n);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);