/*
28. N!에서 0의 개수
자연수 N이 입력되면 N! 값에서 일의 자리부터 연속적으로 ‘0’이 몇 개 있는지 구하는 프로그
램을 작성하세요.
만약 5! =  × ×  ×  × = 120으로 일의자리부터 연속적된 ‘0’의 개수는 1입니다.
만약 12! = 479001600으로 일의자리부터 연속적된 ‘0’의 개수는 2입니다.
▣ 입력설명
첫 줄에 자연수 N(10<=N<=1,000)이 입력된다.
▣ 출력설명
일의 자리부터 연속된 0의 개수를 출력합니다.
▣ 입력예제 1 
12
▣ 출력예제 1
2
*/

const n = 12;
// const n = 990; //답은 245

// 숫자 팩토리얼에 들어있는 0의 갯수를 쉽게 확인하려면 2 X 5 combination이 몇개 있는지 확인하면 된다.
// 2의 갯수와 5의 갯수중에 minimum값을 print해주면 된다.
function solution(n) {
    // 2의 갯수를 담을 cnt Value
    let cnt2 = 0;
    // 5의 갯수를 담을 cnt Value
    let cnt5 = 0;
    for (let i = 2; i <= n; i++) {
        let temp = i;
        let j = 2;
        while(1){
            if(temp%j === 0){
                temp /= j;
                if (j ===2 ) {
                    cnt2++;
                } else if(j ===5) {
                    cnt5++;
                }
            }else{
                j++;
            }
            if (temp === 1) {
                break;
            }
        }
    }
    if (cnt2 >= cnt5) {
        return cnt5;
    } else {
        return cnt2;
    }
}
let answer = solution(n);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);