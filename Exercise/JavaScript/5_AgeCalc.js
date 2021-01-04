/*
나이계산 
주민등록증의 번호가 주어지면 주민등록증 주인의 나이와 성별을 판단하여 출력하는 프로그램
을 작성하세요. 주민등록증의 번호는 -를 기준으로 앞자리와 뒷자리로 구분된다.
뒷자리의 첫 번째 수가 1이면 1900년대생 남자이고, 2이면 1900년대생 여자, 3이면 2000년대
생 남자, 4이면 2000년대생 여자이다.
올해는 2019년입니다. 해당 주민등록증 주인의 나이와 성별을 출력하세요.
▣ 입력설명
첫 줄에 주민등록증 번호가 입력됩니다.
▣ 출력설명
첫 줄에 나이와 성별을 공백을 구분으로 출력하세요. 성별은 남자는 M(man), 여자는 
W(Woman)로 출력한다.
▣ 입력예제 1 
780316-2376152
▣ 출력예제 1
42 W
▣ 입력예제 2 
061102-3575393
▣ 출력예제 2
14 M
*/


// const idstr = "780316-2376152";
const idstr = "061102-3575393";
let answer = '';

function solution(idstr) {
    let ans = '';
    let age = 0;
    let gender = '';
    const genNum = parseInt(idstr[7]);

    if (genNum === 1 || genNum ===2)
    {
        age = 2020-1900-parseInt(idstr[0])*10-parseInt(idstr[1])+1;
    }else{
        age = 2020-2000-parseInt(idstr[0])*10-parseInt(idstr[1])+1;
    }
    if (genNum === 1 || genNum ===3){
        gender = 'M';
    }else{
        gender = 'W';
    }
    ans = `${age} ${gender}`
    return ans;

}


answer = solution(idstr);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);