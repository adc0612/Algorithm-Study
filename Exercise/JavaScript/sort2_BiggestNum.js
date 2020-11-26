const numbers = [3, 30, 34, 5, 9];

function solution(numbers) {
    // numbers.map(c => c + '') = 각 숫자들을 문자로 변환(1 => '1')
    // sort((a, b) => (b + a) - (a + b)) = 문자로 변환된 숫자를 연결하여 비교정렬('3', '30' => ('303') - ('330'))
    //     .join('') = 문자열 합치기
    // numbers 배열이 0 으로만 구성되어 있을 경우 '0'
    // 만 출력
 
    let ans = numbers.map(c => c + '') //
        .sort((a, b) => (b + a) - (a + b)).join('');
    return ans === '0' ? '0' : ans;
}

let answer = solution(numbers);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);