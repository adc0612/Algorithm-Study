const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
let answer = '';

function solution(participant,completion){
    let ans = '';
    let obj = {};

    for (let i of participant) {
        if(!obj[i]){
            obj[i] =1;
        }else{
            obj[i]++;
        }
    }

    for (let i of completion){
        if (obj[i]){
            obj[i]--;
        }
    }

    for (let i of participant){
        if (obj[i] >=1){
            ans = i;
        }
    }

    return ans;
}


answer = solution(participant, completion);
$('#header')
    .html("<p>"+answer+"</p>")


console.log(`답은: ${answer}`);