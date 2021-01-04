/*
38. Inversion Sequence
1부터 n까지의 수를 한 번씩만 사용하여 이루어진 수열이 있을 때, 1부터 n까지 각각의 수 
앞에 놓여 있는 자신보다 큰 수들의 개수를 수열로 표현한 것을 Inversion Sequence라 한다. 
예를 들어 다음과 같은 수열의 경우 
 4 8 6 2 5 1 3 7
1앞에 놓인 1보다 큰 수는 4, 8, 6, 2, 5. 이렇게 5개이고,
2앞에 놓인 2보다 큰 수는 4, 8, 6. 이렇게 3개,
3앞에 놓인 3보다 큰 수는 4, 8, 6, 5 이렇게 4개......
따라서 4 8 6 2 5 1 3 7의 inversion sequence는 5 3 4 0 2 1 1 0 이 된다.
n과 1부터 n까지의 수를 사용하여 이루어진 수열의 inversion sequence가 주어졌을 때, 원래
의 수열을 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<100)이 주어지고, 두 번째 줄에는 inversion sequence가 숫자 
사이에 한 칸의 공백을 두고 주어진다.
▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다.
▣ 입력예제 1 
8
5 3 4 0 2 1 1 0
▣ 출력예제 1
4 8 6 2 5 1 3 7

1 2 3 4 5 6 7 8
5 3 4 0 2 1 1 0

0 0 0 0 0 0 0 8
0 0 0 0 0 0 8 7
0 0 0 0 0 8 6 7
0 0 0 0 8 6 5 7
0 0 0 4 8 6 5 7
0 0 4 8 6 5 3 7
0 4 8 6 2 5 3 7
4 8 6 2 5 1 3 7

*/

const n = 8;
const str = '5 3 4 0 2 1 1 0';

function solution(n, str) {
    const arr = str.split(' ').map(Number);
    const c = Array.from({
        length: n
    }, () => 0);

    for (let i = n-1; i >= 0 ; i--) {
        let pos = i;
        for (let j = 0; j < arr[i]; j++) {
            // 뒤에 숫자를 앞에 자리에 넣어주므로 숫자들을 땡겨온다.
            c[pos] = c[pos+1];
            // pos++은 그래야지 j for문이 돌아가면서 pos가 변경되면서 수들이 앞으로 땡겨진다.
            pos++;
            console.log(`i = ${i} j = ${j}`);
        }
        //  i + 1은 배열이 0부터 시작해서 그렇다.
        c[pos] = i+1;
        console.log(c);
    }

    return c;
}

let answer = solution(n, str);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);