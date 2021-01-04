const str1 = '10 90';
const str2 = '23 17 120 34 112 136 123 23 25 113';

function solution(str1, str2) {
    let max = 0;
    let temp = 0;
    const arr1 = str1.split(' ', 2).map(Number);
    const arr2 = str2.split(' ', arr1[0]).map(Number);
    arr2.forEach(element => {
        if (element > arr1[1]) {
            temp++;
            if (temp > max)
                max = temp;
        } else {
            temp = 0;
        }
    });
    if (max === 0) {
        return -1;
    } else {
        return max;
    }
}

let answer = solution(str1, str2);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);