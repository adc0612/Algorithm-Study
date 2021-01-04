const n = 3;
const strArr = ['10 55', '20 350', '100 5050']

function checkQuiz1(str) {
    const arr = str.split(' ', 2);
    let sum = 0;
    for (let i = 1; i <= parseInt(arr[0]); i++) {
        sum += i;
    }
    if (sum === parseInt(arr[1])) {
        return "YES";
    } else {
        return "NO";
    }
}

// map 이용하여 바로 int형으로 치환
function checkQuiz2(str) {
    const arr = str.split(' ', 2).map(Number);
    let sum = 0;
    for (let i = 1; i <= arr[0]; i++) {
        sum += i;
    }
    if (sum === arr[1]) {
        return "YES";
    } else {
        return "NO";
    }
}

function solution(n, strArr) {
    let answer = '';
    strArr.forEach(element => {
        answer += `${checkQuiz2(element)} `
    });
    return answer;
}

let answer = solution(n, strArr);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);