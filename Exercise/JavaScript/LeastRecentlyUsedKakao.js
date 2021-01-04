/*
문제 설명
캐시
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

입력 형식
캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.
출력 형식
입력된 도시이름 배열을 순서대로 처리할 때, 총 실행시간을 출력한다.
조건
캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
cache hit일 경우 실행시간은 1이다.
cache miss일 경우 실행시간은 5이다.
입출력 예제
캐시크기(cacheSize)	도시이름(cities)	실행시간
3	[Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA]	50
3	[Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul]	21
2	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	60
5	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	52
2	[Jeju, Pangyo, NewYork, newyork]	16
0	[Jeju, Pangyo, Seoul, NewYork, LA]	25
*/

const cacheSize = 3;
const cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

function solution1(cacheSize, cities) {
    const cache = [cities.length];
    let cnt = 0;
    for (let i = 0; i < cities.length; i++) {
        // 대 소문자 구분을 안하므로 모든 글자를 대문자화 한다.
        let city = cities[i].toUpperCase();
        // 도시이름이 찾아지면 배열위치를 저장할 변수 선언
        // 만약 찾아지면 위치를 저장하고 아니면 -1를 유지한다.
        let pos = -1;
        // cache배열을 for loop돌려서 해당 도시가 있는지 찾고, 있으면 pos안에 위치를 넣어준다.
        for (let j = 0; j < cacheSize; j++) {
            if (city === cache[j]) {
                pos = j;
            }
        }
        // pos = -1이면 cache에 해당 도시가 없는 것이므로
        // 배열안에 있는 도시들을 한칸씩 뒤로 떙겨주고
        // 맨 앞에 도시를 추가한다.
        // cache miss로 실행시간 5를 추가해준다. 
        if (pos === -1) {
            for (let j = cacheSize - 1; j >= 1; j--) {
                cache[j] = cache[j - 1];
            }
            cache[0] = city;
            cnt += 5;
        } else {
            // else면 도시가 들어있다는 것이다.
            // pos에 위치가 들어있으므로 해당 위치를 기준으로 한칸씩 뒤로 떙겨준다.
            // 이렇게 되면 pos에 있던 도시는 사라진다.
            // 맨앞에 다시 추가해준다.
            // cache hit이므로 실행시간 1을 추가해준다.
            for (let j = pos; j >= 1; j--) {
                cache[j] = cache[j - 1];
            }
            cache[0] = city;
            cnt += 1;
        }
    }
    return cnt;
}

function solution2(cacheSize, cities) {
    let answer = 0;
    let cacheArr = [];
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toUpperCase();
        // 해당  city이름을 가지고 있는 Object찾기 후 반환
        let findObj = cacheArr.find(e => e.name === city);
        // 없으면 배열에 추가해줘야함
        if (findObj === undefined) {
            // 만약 배열 size가 cacheSize보다 크면 제일 안에 있는 애를 내보낸다.
            cacheArr.push({
                name: city,
                index: i,
            });
            answer += 5;
            if (cacheArr.length > cacheSize) {
                cacheArr.shift();
            }
            // naem에 city index에 i즉 들어온 순서를 기입니다.

        } else {
            // indexOf를 통해 해당요소 배열 위치를 파악
            let findIdx = cacheArr.indexOf(findObj);
            // 해당요소를 찾아 index를 지금 들어온 순서로 바꿔준다.
            cacheArr[findIdx].index = i;
            answer++;
        }

        // loop가 돌면서 index가 큰 순서로 정렬한다.
        // 정렬하면 최신으로 들어온 순서가 앞으로 오면서 제거할 때 제일 먼저들어온 요소가 먼저 나가게 된다.
        cacheArr.sort((a, b) => {
            return a.index - b.index;
        });

    }
    return answer;

}

let answer = solution1(cacheSize, cities);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);