const n = 5;
const num = [125, 15232, 79, 1325, 97];

function digit_sum(x) {
    let sum = 0;
    while(x>0){
        //125
        sum += x % 10; // sum = 5
        // x = x/10 sum 12
        x = Math.floor(x/10);
    }
    return sum;
}

function solution(n, num) {
    let maxSum = 0;
    let maxNum;
    for (let i = 0; i < n; i++) {
        let sum = digit_sum(num[i]);
        console.log(sum);
        if (sum > maxSum){
            maxSum = sum;
            maxNum = num[i];
        }
        else if (sum === maxSum){
            if (num[i] > maxNum){
                maxNum = num[i];
            }
        }
    }
    return maxNum;
}

answer = solution(n, num);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);