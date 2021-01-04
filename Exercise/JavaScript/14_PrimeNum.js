const n = 5;
const num = [32, 55, 62, 3700, 250];

function reverse(x) {
    let sum = 0;
    while (x > 0) {
        sum = sum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return sum;
}

function isPrime(x) {
    if (x === 1)
        return false;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function solution(n, num) {
    let ans = '';
    for (let i = 0; i < n; i++) {
        let reverseNum = reverse(num[i]);
        if (isPrime(reverseNum))
            ans += `${reverseNum} `
        console.log(ans);
    }
    return ans;
}

answer = solution(n, num);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);