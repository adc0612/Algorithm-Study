const str = ")))";
let answer = '';

function solution(str) {
    let cnt = 0;
    let ans = '';
    for(let i =0;i<str.length;i++){
        if (str[i] === '('){
            cnt++;
        }else if(str[i] === ')'){
            cnt--;
        }else{
            ans = "NO";
            break;
        }
        if(cnt<0){
            ans = "NO";
            break;
        }
    }
    if(cnt === 0){
        ans = "YES";
    }else{
        ans = "NO";
    }
    return ans;
}


answer = solution(str);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);