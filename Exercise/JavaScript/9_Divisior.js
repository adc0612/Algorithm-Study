const num = 8;
let answer = '';

// i만큼 j가 loop되므로 시간복잡도는 n*n n제곱이다.
function solution(num) {
    let ans = [];
    for (let i = 1; i <= num; i++) {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                cnt++;
            }
        }
        ans.push(cnt);
    }
    return ans;
}

// j는 j+i니까 시간이 절약된다.
// n의 배수는 약수니까 cnt[n]의 올려주는거다.
// 2의 배수는 4, 6, 8 이니까 자기자신 포함한 cnt[2], cnt[4], cnt[6], cnt[8] 1씩 올려준다.
function solution1(num) {
    let cnt = [num];
    for (let i = 1; i <= num; i++) {
        cnt[i] = 0;
    }
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j=j+i) {
            cnt[j]++;
        }
    }
    return cnt;
}

let arr1 = solution1(num)
for (let i = 1; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}

answer = solution(num);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);