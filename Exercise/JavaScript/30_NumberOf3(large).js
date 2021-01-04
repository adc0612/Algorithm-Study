/*
30. 3의 개수는?(large)
자연수 N이 입력되면 1부터 N까지의 자연수를 종이에 적을 때 각 숫자 중 3의 개수가 몇 개 
있는지 구하려고 합니다.
예를 들어 1부터 15까지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5으로 
3의 개수는 2개입니다.
자연수 N이 입력되면 1부터 N까지 숫자를 적을 때, 3의 개수가 몇 개인지 구하여 출력하는 
프로그램을 작성하세요.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=1,000,000,000)이 주어집니다.
▣ 출력설명
3의 개수를 출력하세요.
▣ 입력예제 1 
15
▣ 출력예제 1
2
*/

const n = 5367;
const d = 3;

function solution(n, d) {
    let cnt = 0;
    let digit = 1;
    let lt = 1,
        rt, cur;

    while (lt != 0) {
        // digit이 1부터 시작하니까 1의 자리에 d가 몇개가 오는지 부터 계산
        lt = Math.floor(n / (digit * 10));
        cur = Math.floor(n / digit) % 10;
        rt = n % digit;
        if (cur > d) {
            cnt += (lt + 1) * digit;
            console.log(`cnt1 = ${(lt + 1) * digit}`);
        } else if (d > cur) {
            cnt += lt * digit;
            console.log(`cnt2 = ${lt * digit}`);

        } else {
            cnt += lt * digit + rt;
            console.log(`cnt3 = ${lt * digit + rt}`);

        }
        console.log(`lt: ${lt}  cur: ${cur}  rt: ${rt}`);
        console.log(`cnt = ${cnt}`);
        console.log(``);
        // 10씩 곱해져서 끝의 자리수 까지 구해준다.
        digit *= 10;
    }
    return cnt;
}

let answer = solution(n, d);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);