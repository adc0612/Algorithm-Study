/*
45. 공주 구하기
정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다. 
정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 정보왕국의 왕은 
다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.
왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N
번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다. 그리고 1번 왕자부터 시
계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 한 왕자가 K(특정숫자)를 외치면 그 
왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다. 그리고 다음 왕자부터 다시 
1부터 시작하여 번호를 외친다.
이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.
        1
    8       2
7               3
    6       4
        5
예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3
을 외쳐 제외된다. 이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7
번 왕자에게 공주를 구하러갑니다.
N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.
▣ 입력설명
첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.
▣ 출력설명
첫 줄에 마지막 남은 왕자의 번호를 출력합니다.
▣ 입력예제 1 
8 3
▣ 출력예제 1
7
*/

const str1 = '8 3';

// Queue를 활용해서 구현
// m-1만큼 deque하고 enque하고 m번째에는 deque를 한다.
function solution1(str1) {
    const strArr = str1.split(' ', 2).map(Number);
    const n = strArr[0];
    const m = strArr[1];
    const arr = [];
    let ans = '';
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    // n-1만큼 loop를 돌린다.
    for (let i = 1; i < n; i++) {
        // m-1만큼 loop를 돌려 앞에 있는 숫자를 뺴서 다시 뒤에다 넣는다.
        for (let j = 1; j < m; j++) {
            arr.push(arr.shift());
        }
        // m번째 아이템을 뺀다
        arr.shift();
    }

    // 답은 arr배열안에 든 하나뿐인 요소이므로 shift해서 return한다.
    return arr.shift();
}

// check배열을 이용
function solution2(str1) {
    const strArr = str1.split(' ', 2).map(Number);
    const n = strArr[0];
    const m = strArr[1];
    // n+1만큼 array를 선언 후 0으로 초기화
    const arr = Array.from({
        length: n+1
    }, () => 0);

    let pos = 1;
    let breakPoint = 0;
    let cnt = 0;
    while (1) {
        // pos가 n보다 커지면 arr범위를 벗어나므로 다시 1로 초기화 한다.
        if (pos > n) {
            pos = 1;
        }
        // arr배열에 0인 애들만 loop로 돌린다.
        if (arr[pos] === 0) {
            cnt++;
            if (cnt === m) {
                console.log(pos);
                arr[pos] = 1;
                breakPoint++;
                cnt = 0;
            }
        }
        if (breakPoint === n - 1) {
            break;
        }
        pos++;
    }

    for (let i = 1; i <= n; i++) {
        if (!arr[i]) {
            return i;
        }
    }
    return -1;
}


let answer = solution2(str1);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);