const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays) {
    const total = [],
        top = {};
    let ans = [];

    for (let i = 0; i < genres.length; i++) {

        let index = total.findIndex(e => e.name === genres[i]);
        if (index < 0) {
            total.push({
                name: genres[i],
                val: plays[i],
            });
        } else {
            let temp = total[index];
            temp.val += plays[i];
        }

        if (!top[genres[i]]) {
            top[genres[i]] = [i];
        } else {
            let tempArr = top[genres[i]];
            if (tempArr.length < 2) {
                plays[tempArr[0]] < plays[i] ? top[genres[i]].unshift(i) : top[genres[i]].push(i);
            } else {
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

    total.sort((a, b) => {
        return a.val > b.val ? -1 : a.val < b.val ? 1 : 0;
    });

    total.forEach(item => {
        ans = ans.concat(top[item.name]);
    })
    return ans;
}




let answer = solution(genres, plays);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);