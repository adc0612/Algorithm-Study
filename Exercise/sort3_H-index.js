const citations = [3, 0, 6, 2, 5];

function solution(citations) {
    citations.sort((a, b) => b - a);

    var index = 0;
    while (index <= citations.length) {
        if (index + 1 <= citations[index]) {
            index++;
        } else break;
    }
    return index;
}

let answer = solution(citations);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);