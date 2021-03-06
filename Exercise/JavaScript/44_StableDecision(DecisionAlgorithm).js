/*
44. 마구간 정하기(이분검색 응용)
N개의 마구간이 1차원 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가
지며, 마구간간에 좌표가 중복되는 일은 없습니다.
현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 
각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 
마구간에 배치하고 싶습니다. 
C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대
값을 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
둘째 줄부터 N개의 줄에 걸쳐 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 한 줄에 하나씩 
주어집니다.
▣ 출력설명
첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.
▣ 입력예제 1 
5 3
1
2
8
4
9
▣ 출력예제 1
3
*/

const str1 = '322 120';
const str2 = '0 2 5 18 22 27 32 33 35 56 65 66 67 69 82 101 119 132 160 166 182 199 206 208 212 222 231 244 252 257 259 273 277 321 359 383 392 421 434 446 478 480 489 496 512 520 554 597 604 607 613 652 654 660 685 697 702 708 758 806 811 859 874 897 935 944 945 948 950 956 966 970 971 980 997 1001 1035 1063 1074 1101 1139 1147 1157 1174 1175 1188 1194 1199 1216 1217 1231 1243 1258 1293 1306 1315 1353 1369 1371 1377 1382 1400 1405 1433 1436 1461 1467 1468 1471 1475 1480 1492 1525 1529 1534 1548 1560 1570 1586 1636 1649 1655 1694 1715 1718 1723 1756 1778 1788 1824 1827 1838 1849 1878 1883 1920 1922 1923 1969 1970 1976 1978 2000 2009 2022 2038 2051 2120 2153 2169 2173 2187 2195 2248 2301 2304 2346 2365 2368 2376 2396 2406 2408 2438 2486 2516 2523 2549 2553 2586 2592 2595 2599 2623 2634 2637 2654 2679 2699 2708 2733 2768 2769 2785 2789 2820 2851 2863 2864 2872 2879 2897 2907 2926 2930 2967 3006 3020 3023 3029 3034 3037 3041 3051 3055 3072 3073 3080 3085 3093 3097 3139 3141 3153 3165 3194 3208 3237 3269 3275 3276 3304 3340 3367 3408 3409 3427 3430 3474 3484 3510 3554 3556 3567 3579 3615 3648 3651 3673 3678 3704 3715 3723 3727 3734 3735 3754 3762 3783 3800 3806 3850 3868 3899 3903 3905 3927 3944 3982 3986 4007 4008 4028 4075 4077 4122 4125 4128 4129 4139 4140 4153 4228 4234 4260 4284 4288 4329 4350 4357 4372 4398 4416 4441 4443 4444 4467 4478 4482 4490 4505 4530 4538 4552 4556 4587 4598 4605 4658 4662 4664 4669 4677 4740 4744 4751 4768 4769 4790 4791 4797 4837 4843 4851 4878 4888 4901 4954 4961 4963 4972 4992';
// const str1 = '64 19';
// const str2 = '8 11 18 37 57 65 83 101 112 115 129 130 146 149 153 159 166 167 172 191 201 205 227 228 234 272 273 282 295 319 340 394 398 399 436 446 453 481 499 503 611 655 680 692 718 725 726 735 739 778 811 839 841 852 867 882 907 915 923 943 956 967 970 989';
// const str1 = '5 3';
// const str2 = '1 2 8 4 9';

// 시로 정한 mid값으로 몇 마리 말이 배치 될 수 있나 본다.
function countStable(length, a) {
    // 처음말은 무조건 첫 배열아이템에 들어있는 마구간에 배치
    // 처음말을 첫 배열에 있는 마구간에 배치했으므로 cnt는 1로 셋팅
    let cnt = 1;
    let pos = a[0];
    // a[0]은 썼으므로 a[1]부터 찾으며 들어온 길이가 해당 될 수 있는지 본다.
    // a[i] - pos 즉 이 마구간과 전 마구간 길이를 구해서 들어온 길이보다 같거나 크면 이 마구간에는 배치가 가능하므로 cnt++해주고 pos를 지금으로 바꿔준다.
    // 만약 작으면 배치가 가능하지 않으므로 그냥 넘긴다.
    // 구해진 갯수 cnt를 return한다.
    for (let i = 1; i < a.length; i++) {
        if (a[i] - pos >= length) {
            cnt++;
            pos = a[i];
        }
    }
    return cnt;
}

function solution(str1, str2) {
    const arr1 = str1.split(' ', 2).map(Number);
    const n = arr1[0];
    const m = arr1[1];
    const a = str2.split(' ', n).map(Number);
    a.sort((a, b) => a - b);
    // 마구간에 배치했을 때 가까운 두 말의 거리의 최대길이는 제일 뒤에있는수 즉 정렬했으니 제일 큰 수이다.
    let max = a.reduce((a, b) => Math.max(a, b));
    // left는 0으로 잡고, right는 max로 잡으며 이분검색(Binary Search) 한다.
    let lt = 0;
    let rt = max;
    let ans;

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);
        // 구해진 mid는 임시로 정한 말 사이 최대거리
        // 일단 countStable에 넣어서 임시로 정한 mid값으로 몇 마리 말이 배치 될 수 있나 본다.
        let cnt = countStable(mid, a);
        console.log(`mid = ${mid} cnt = ${cnt}`);
        // 들어온 cnt가 m 즉 주어지는 말 마리수보다 같거나 크면 답이 될 수 있으므로 답에 담아주고
        // 최대길이를 찾아야 하므로 더 큰 값이 될 수 있을 수 있다. 
        // 그래서 lt를 mid+1로 해서 다시 이분검색해서 탐색한다.
        if (cnt >= m) {
            ans = mid;
            lt = mid+1;
        }else{
            // 들어온 cnt가 m보다 작으면 해당 수보다 큰 수는 들어 갈 수 없다.
            // 예) 예제에서 mid가 4로 선택되서 countStable함수에 들어가면 2를 반환한다.
            // 4보다 큰 수들은 countStable 들어가면 2 이상에 값이 안나온다.
            // 그래서 rt를 4보다 작은 3으로 잡고 다시 이분검색한다.
            rt = mid-1;
        }
    }
    return ans;
}

let answer = solution(str1, str2);

$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);