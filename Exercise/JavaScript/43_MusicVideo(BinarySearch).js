/*
43. 뮤직비디오(이분검색 응용)
지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. 
DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지
되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번 
노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 
한다.
지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 
DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기
로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는 
모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
▣ 입력설명
첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서 
부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을 
넘지 않는다고 가정하자.
▣ 출력설명
첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.
▣ 입력예제 1 
9 3
1 2 3 4 5 6 7 8 9
▣ 출력예제 1
17

**설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할
수 있다. 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.
*/

const str1 = '9 3';
const str2 = '1 2 3 4 5 6 7 8 9';

// 몇개의 DVD로 만들 수 있는지 계산하는 함수를 만든다.
// dvd 최대 길이와 DVD곡들이 배열에 담겨서 인자로 들어온다.
function countDVD(dvdLen, a) {
    // DVD 갯수를 셀 cnt 선언
    // 처음부터 1로 초기화
    let cnt = 1;
    // DVD용량을 더해서 계산에 쓰일 변수 선언
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        // 만약 더해질 DVD용량이 최대 길이를 초과하면 
        // 새로운 DVD에 기록하는 것이므로 1을 더한다.
        // 그리고 sum에는 지금들어는 DVD용량으로 초기화 시킨다.
        // 왜냐하면 새로운 DVD에는 지금들어오는 DVD만 존재하기 떄문
        if (sum + a[i] > dvdLen) {
            cnt++;
            sum = a[i];
        } else {
            // 용량이 초과하지 않으면 계속 sum에 더해준다.
            sum += a[i];
        }
    }
    return cnt;
}

function solution(str1, str2) {
    const arr1 = str1.split(' ').map(Number);
    const n = arr1[0];
    const m = arr1[1];
    const a = str2.split(' ', n).map(Number);
    let ans;
    let lt = 1;
    // array의 합을 구하는 reduce 함수 
    // 여기서 0은 초기 숫자
    let rt = a.reduce((a, b) => a + b, 0);
    // array를 돌며 reduce함수로 이 배열에 max값을 찾는다.
    let max = a.reduce((a, b) => Math.max(a, b));
    // 이분검색처럼 lt와 rt를 바꿔가며 값을 찾는다. 
    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        // max보다 mid가 같거나 커야하는 이유는 한 곡을 여러 DVD로 나눠 저장할 수 없으므로 
        // DVD최소용량은 최고 긴 곡들보다 같거나 커야한다.
        // 만약 countDVD함수를 돌려 나오는 DVD갯수가 m보다 작거나 같으면 최소용량이 될 수 있으므로 ans값으로 넣어놓는다.
        // 그리고 rt를 mid-1으로 바꿔서 더 낮은 용량이 될 수 있는지 검색한다.
        if (mid >= max && countDVD(mid, a) <= m) {
            ans = mid;
            rt = mid - 1;
        } else {
            // 만약 countDVD함수를 돌려 나오는 DVD갯수가 m 보다 크면 답이 아니므로 최소용량은 더 커야 하므로
            // mid값과 그보다 낮은 숫자들은 최소용량이 될 수 없다.
            // 그러므로 lt = mid +1로 만들어서 mid보다 큰 용량을 찾을 수 있게 한다.
            lt = mid + 1;
        }
    }
    return ans;
}

let answer = solution(str1, str2);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);