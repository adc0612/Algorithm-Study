const n = 20;

function solution(n) {
    let cnt = 0;
    if (n === 0 || n === 1)
        return 0;
    for (let i = 2; i <= n; i++) {
        let tf = true;
        // j가 root i 만큼 loop가 돌아서 시간이 준다.
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                tf = false;
                break;
            }
        }
        if (tf)
            cnt++;
    }
    return cnt;
}

answer = solution(n);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);