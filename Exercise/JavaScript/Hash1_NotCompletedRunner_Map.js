const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
let answer = '';

function solution(participant, completion) {
    let ans = '';
    const myMap = new Map();

    for (let i of participant) {
        if (!myMap.get(i)) {
            myMap.set(i, 1);
        } else {
            myMap.set(i, myMap.get(i) + 1);
        }
    }

    for (let i of completion) {
        if (myMap.get(i)) {
            myMap.set(i, myMap.get(i) - 1);
        }
    }

    for (let i of participant) {
        if (myMap.get(i) && myMap.get(i) >= 1) {
            ans = i;
        }
    }

    return ans;

}


answer = solution(participant, completion);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);