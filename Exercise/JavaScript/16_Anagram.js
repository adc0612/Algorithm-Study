const str1 = 'AbaAeCe';
const str2 = 'baeeACA';

function storeChar(str) {
    const charArr = Array.from({
        length: 52
    }, () => 0);
    for (let i = 0; i < str.length; i++) {
        let ch = str.charCodeAt(i);
        console.log(ch);
        if (ch > 64 && ch < 91) {
            charArr[ch - 65]++;
        } else if (ch > 96 && ch < 123) {
            charArr[ch - 71]++;
        }
    }
    console.log(charArr);
    return charArr;
}

function solution(str1, str2) {
    const strArr1 = storeChar(str1);
    const strArr2 = storeChar(str2);
    for (let i = 0; i < strArr1.length; i++) {
        if (strArr1[i] != strArr2[i]) {
            return 'NO';
        }
    }
    return 'YES';
}

answer = solution(str1, str2);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);