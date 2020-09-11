const answers = [1, 2, 3, 4, 5];

function solution(answers) {
    let ans = [];
    const listArr = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let scoreArr = [0,0,0];

    for (let i = 0; i < answers.length; i++) {
        if(answers[i] === listArr[0][i%5]){
            scoreArr[0]++;
        }
        if(answers[i] === listArr[1][i%8]){
            scoreArr[1]++;
        }
        if(answers[i] === listArr[2][i%10]){
            scoreArr[2]++;
        }
    }

    let maxNum=0;
    for (let i of scoreArr){
        // console.log(maxNum);
        // console.log(i);
        if (i > maxNum){
            maxNum = i;
        }
    }

    for(let i =0;i<scoreArr.length;i++){
        if (scoreArr[i] === maxNum){
            ans.push(i+1);
        }
    }

    return ans;
}

let answer = solution(answers);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);