const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
    const total = [],
        top = {};
    let ans = [];

    for (let i = 0; i < genres.length; i++) {
        //findIndex함수로 들어오는 genres이름으로 된 배열 요소가 있는지 확인
        let index = total.findIndex(e => e.name === genres[i]);
        console.log(index);
        // findIndex함수로 반환된 값이 index에 담긴다.
        // findINdex함수로 genres이름으로 된 배열 요소가 안 찾아지면 index에는 -1이 담긴다.
        // index에 -1이 담기면 genres이름으로된 배열 요소가 없으므로 
        // name에 genres이름 담고 val에 plays값을 담고 push한다.
        if (index < 0) {
            total.push({
                name: genres[i],
                val: plays[i],
            });
        }
        // else로 오면 genres이름으로 된 배열 요소가 있으므로
        // 같은 genres이름이로 된 배열 val에 가지고있는 plays 값을 더해준다.
        else {
            let temp = total[index];
            temp.val += plays[i];
        }
        console.log(total);

        // top베열에는 각 genres이름로 된 배열 요소에 plays큰 값을 가진 순서대로 고유index를 넣어 줄 예정이다.
        // top[genres[i]]이 false면 genres이름이로 된 배열 요소가 없으므로 index를 배열형태로 집어 넣는다.
        if (!top[genres[i]]) {
            top[genres[i]] = [i];
        }
        // else에 오면 genres이름으로 된 배열 요소가 있으므로 큰값을 가진 순서대로 고유 index를 배열 형태로 넣어줘야한다.
        else {
            let tempArr = top[genres[i]];
            // tempArr.length가 2보다 작으면 배열안에 1개 밖에 없으므로 지금 들어오느 play값을 비교후 
            // 지금 들어오는 play값이 크면 unshift를 해서 배열 맨 앞에 고유번호를 넣어준다.
            // 지금 들어오는 play값이 작으면 push를 해서 배열 맨 뒤에 고유번호를 넣어준다. 
            if (tempArr.length < 2) {
                plays[tempArr[0]] < plays[i] ? top[genres[i]].unshift(i) : top[genres[i]].push(i);
            }
            // else면 배열안에 2개가 벌써 안에 있으므로 지금 들어오는 play값을 비교해서 넣어줄지 판단한다.
            // 맨 앞에 있는 값은 제일 큰 play값을 가지고 있으므로 이거 보다 크면 제일 앞에 unshift해주고 뒤에 있는 것을 pop해준다.
            // 맨 앞에 있는 값보다 작고 뒤에있는 값보다 크면 일단 뒤에있는 값을 pop해서 빼고 지금 들어오는 것을 push한다.
            // 만약 둘 다 보다 작으면 아무것도 안해 줘도 된다.
            else {
                if (plays[tempArr[0]] < plays[i]) {
                    top[genres[i]].unshift(i);
                    top[genres[i]].pop();
                } else if (plays[tempArr[1]] < plays[i]) {
                    top[genres[i]].pop();
                    top[genres[i]].push(i);
                }
            }
        }
    }

    // total안에 genres이름과 plays값이 들어가 있다.
    // 그것을 큰 순서대로 sort해준다.
    total.sort((a, b) => {
        // return b.val - a.val;
        return a.val > b.val ? -1 : a.val < b.val ? 1 : 0;
    });

    // total안에 genres이름 별 for문을 돌려서
    // ans배열에 total안에 genres이름으로 되어있는 top배열 안에 고유 번호를 하나씩 넣어준다.
    total.forEach(item => {
        ans = ans.concat(top[item.name]);
    });

    return ans;
}




let answer = solution(genres, plays);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);