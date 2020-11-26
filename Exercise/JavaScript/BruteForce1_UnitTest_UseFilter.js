const answers = [1, 2, 3, 4, 5];

function solution(answers) {
    let ans = [];
    const list1 = [1, 2, 3, 4, 5];
    const list2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const list3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let list1Ans = answers.filter((a, i) => a === list1[i % list1.length]).length;
    let list2Ans = answers.filter((a, i) => a === list2[i % list2.length]).length;
    let list3Ans = answers.filter((a, i) => a === list3[i % list3.length]).length;

    let maxNum = Math.max(list1Ans, list2Ans, list3Ans);

    if (maxNum === list1Ans) {
        ans.push(1);
    }
    if (maxNum === list2Ans) {
        ans.push(2);
    }
    if (maxNum === list3Ans) {
        ans.push(3);
    }
    return ans;
}

let answer = solution(answers);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);