const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3]
];

function solution(array, commands) {
    let ans = [];
    for (let i = 0; i<commands.length;i++){
        let start = commands[i][0];
        let end = commands[i][1];
        let findNum = commands[i][2];
        let newArr = array.slice(start-1, end);
        console.log(newArr);
        newArr.sort((a,b) =>{
            return a-b;
        });
        console.log(newArr);
        ans = ans.concat(newArr[findNum-1]);
    }
    return ans;
}




let answer = solution(array, commands);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);