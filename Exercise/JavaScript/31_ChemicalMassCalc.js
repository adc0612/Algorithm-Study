/*
31. 탄화수소 질량
탄소(C)와 수소(H)로만 이루어진 화합물을 탄화수소라고 합니다.
탄소(C) 한 개의 질량은 12g, 수소(H) 한 개의 질량은 1g입니다.
에틸렌(C2H4)의 질량은 12*2+1*4=28g입니다.
메탄(CH4)의 질량은 12*1+1*4=16g입니다.
탄화수소식이 주어지면 해당 화합물의 질량을 구하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 탄화수소식이 주어집니다. 식의 형태는 CaHb 형태이며 (1<=a, b<=100)이다.
단 a 나 b 가 1이면 숫자가 식에 입력되지 않는다. 예) CH4
▣ 출력설명
첫 줄에 탄화수소의 질량을 출력합니다.
▣ 입력예제 1 
C2H4
▣ 출력예제 1
28
▣ 입력예제 2
CH4
▣ 출력예제 2
16
*/

const str = 'C2H';

function solution(str) {
    let c = 0;
    let h = 0;
    let pos;
    str = str.toUpperCase();

    // 만약 string 2번째 자리에 H가 오면 C앞에 숫자가 없으므로 C는 1이다.
    if (str[1] === 'H') {
        c = 1;
        pos = 1;
    } else {
        // 만약 string 2번째 자리에 숫자가 있으면 숫자가 뭐가 있는지 확인한다.
        let i;
        // for loop을 해당 자리에 H가 아닐때 까지 돌린다.
        for (i = 1; str[i] != 'H'; i++) {
            c = c * 10 + parseInt(str[i]);
        }
        // for lopp이 끝나면 자동으로 i는 H의 위치에 있게 된다. 그 값을 pos에 넣어준다.
        pos = i;
    }
    // console.log(c);
    // 현재 pos는 H의 위치이므로 pos+1에 숫자가 있는지 찾는다.
    // 있으면 for loop을 str.length보다 작을 때까지 돌려준다.
    if (str[pos + 1]) {
        for (let i = pos + 1; i < str.length; i++) {
            h = h * 10 + parseInt(str[i]);
        }
    } else {
        h = 1;
    }
    let ans = c * 12 + h;
    console.log(h);
    return ans;
}

let answer = solution(str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);