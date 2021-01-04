const n = 256;

function solution(n) {
    // 자릿수 갯수: 1번째 자릿수부터 시작 9 다음은 90
    let digit = 9;
    // 해당 자릿수 숫자 개수 
    // ex: 1~9 = 1, 10~99 = 2
    let digitCnt = 1;
    let sum = 0;
    let ans = 0;
    // sum + digit은 해당 자릿수에 될 수 있는 최대 수
    // ex: 0 + 9 는 9 한 자릿수 최대 수
    //  9 + 90은 99 두 자릿수 최대 수
    while (sum + digit < n) {
        ans = sum + (digit*digitCnt);
        sum += digit;
        digit *= 10;
        digitCnt++;
    }
    // while loop 끝나고 남은 수들을 계산해서 ans에 더해준다.
    ans += (n-sum)*digitCnt;
    return ans; 

}

let answer = solution(n);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);