const n = 1230565625;

function solution(n) {
    // let cnt = [9];
    // 아래 처럼 선언하면 length가 10인 배열이 생성되고 0으로 초기화 된다.
    let cnt = Array.from({length: 10}, () => 0);
    console.log(cnt);

    while(n>0){
        cnt[n%10]++;
        console.log(n);
        n = Math.floor(n/10);
    }
    let ans;
    let max =0;
    for(let i =0;i<=9;i++){
        if(cnt[i]>max){
            max = cnt[i];
            ans = i;
        }else if(cnt[i]===max){
            if(i>ans){
                max = cnt[i];
                ans = i;
            }
        }
    }
    console.log(cnt);
    return ans;
}

let answer = solution(n);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);