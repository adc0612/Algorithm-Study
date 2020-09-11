const numbers = [1, 1, 1, 1, 1];
const target = 3;

function solution(numbers, target) {
    let ans = 0;
    dfs(0);

    function dfs(n) {
        if (n === numbers.length) {
            console.log(numbers);
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            if (sum === target) {
                ans++;
            }
            return;
        } else {
            numbers[n] *= 1;
            console.log(`+1: ${n}`);
            dfs(n + 1);

            numbers[n] *= -1;
            console.log(`-1: ${n}`);
            dfs(n + 1);
        }
    }

    return ans
}

let answer = solution(numbers,target);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);