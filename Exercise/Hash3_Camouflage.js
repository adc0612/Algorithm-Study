const clothes = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"]
];
function solution(clothes) {
    let ans = 1;
    const obj = {};
    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }

    for (let i in obj){
        ans *= obj[i];
    }

    return ans-1;

}


let answer = solution(clothes);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);