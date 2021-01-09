// 배열 array 


// 1. 배열 선언
// 선언방법 1: new Array 인자없이 선언시 동적인 크기 배열 만듦
const arr1 = new Array(); //Array []

// 선언방법 2: new Array 인자 하나로 숫자3이 들어갔을 때는 길이가 3인 빈 배열 만듦
const arr2 = new Array(3); //Array(3) [ <3 empty slots> ]
// 이때 인자를 push 할 시 3개의 빈공간을 놔두고 요소가 하나 추가되고 길이가 4로 바뀐다.
arr2.push(1); //Array(4) [ <3 empty slots>, 1 ]

// 선언방법 3: new Array 인자로 숫자 여러개인 1,2,3이 들어갔을 때는 1,2,3요소가 들어있는 배열길이가 3인 배열을 만듦 
const arr3 = new Array(1, 2, 3); //Array(3) [ 1, 2, 3 ]

// 선언방법 4: Array.of 인자로 숫자3이 들어갔을 때는 3요소가 들어있는 배열길이가 1인 배열을 만듦 
const arr4 = Array.of(3); //Array [ 3 ]

// 선언방법 5: 대괄호 안에 숫자 1,2,3이 들어갔을 때는 3요소가 들어있는 배열길이가 3인 배열을 만듦 
const arr5 = [1, 2, 3]; //Array(3) [ 1, 2, 3 ]

// 선언방법 6: Array.from 인자로 숫자 1,2,3이 들어갔을 때는 3요소가 들어있는 배열길이가 3인 배열을 만듦 
const arr6 = Array.from([1, 2, 3]); //Array(3) [ 1, 2, 3 ]

// 선언방법 7: Array.from 에는 첫번쨰 인자로 중괄호 안에 length값을 집어넣고, 두번째는 function으로 0으로 리셋해서 만들수도있다. 
const arr7 = Array.from({
    length: 3
}, () => 0); //Array(3) [ 0, 0, 0 ]

// 선언방법 8: Array.from에 string객체를 넣어서 alphabet하나씩 배열에 담을 수 있다.
const arr8 = Array.from('story'); //Array(5) [ "s", "t", "o", "r", "y" ]

// 선언방법 9: String객체를 split을 사용해서 배열에 담을 수 있다. 이때 map을 이용하면 객체속성도 간단하게 바꿀 수 있다.
const str = '1 2 3 4 5';
const arr9 = str.split(' ').map(Number); //Array(5) [ 1, 2, 3, 4, 5 ]


// 2. 길이와 index
let arr = ['apple', 'banana'];
// length: 배열의 길이를 반환
console.log(arr.length); //3

// Index번호: 해당 index에 있는 요소 출력
console.log(arr[0]); //apple


// 3. 삽입 및 삭제
arr = ['apple', 'banana'];
// a. push: 배열 맨 뒤에 삽입 O(1)
arr.push('melon'); //Array(3) [ "apple", "banana", "melon" ]

// b. pop: 배열 맨 뒤에 있는 요소 빼서 반환 O(1)
console.log(arr.pop()); //melon
console.log(arr); //Array [ "apple", "banana" ]

// c. unshift: 배열 맨 앞에 삽입 O(n)
arr.unshift('lemon', 'orange');
console.log(arr); //Array(4) [ "lemon", "orange", "apple", "banana" ]

// d. shift: 배열 맨 앞에 있는 요소 빼서 반환 O(n)
console.log(arr.shift()); //lemon
console.log(arr); //Array(3) [ "orange", "apple", "banana" ]

// note!! shift and unshift are slower than pop, push
// shift와 unshift는 pop push와 같이 빈공간에 데이터를 넣는것이 아니라
// 앞에서 부터 들어있는 item들을 뒤로 옮겨 자리를 만든 다음 넣는것이라 오래걸린다


// 4. Looping 
arr = ['apple', 'banana', 'cherry', 'kiwi', 'lemon'];
// a. for 
// 기본적인 for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); //apple banana cherry kiwi lemon
}

// b. for in
// arr배열만큼 loop이 돌면서 key반환 
// key를 이용해 value에 접근해야함. 직접 value에 접근 불가능.
// arr뿐만 아니라 객체의 모든 열거 가능한 속성(property)에도 사용 가능
// for...in은 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없기 때문에 인덱스의 순서가 중요한 Array에서 반복을 위해 사용하지 않는 것이 좋다.
for (let i in arr) {
    console.log(i);
}

// c. for of
// arr배열만큼 loop이 돌면서 value 반환
// arr과 같은 [Symbol.iterator]속성을 가지는 컬렉션 정용
for (let i of arr) {
    console.log(i); //apple banana cherry kiwi lemon
}

// d. for each
// arr배열만큼 loop이 돌면서 key value 반환 각 요소에 대해 오름차순으로 한 번씩 실행. 
// forEach()는 Array의 메서드로 주어진 함수를 배열 요소 각각에 대해 실행
// ES6부터는 Map이나 Set에서도 지원
arr.forEach((fruit, index) => console.log(fruit, index)); //apple 0  banana 1 ...


// 5. 정렬
// a. 문자열 sort
arr = ['banana', 'kiwi', 'cherry', 'apple', 'lemon'];
// 인자로는 callback함수가 들어간다.
// 기본으로 유니코드 순서에 따라 정렬되므로 문자열 정렬할 때는 callback함수 없이 써도 된다.
arr.sort(); //Array(5) [ "apple", "banana", "cherry", "kiwi", "lemon" ]
console.log(arr);
// 내림차순 정렬: sort를 이용해 정렬하고 reverse를 사용해 거꾸로 바꿨다.
arr.sort().reverse(); //Array(5) [ "lemon", "kiwi", "cherry", "banana", "apple" ]
console.log(arr);

// b. 숫자 sort
arr = [2, 5, 4, 3, 1];
// 인자로는 callback함수가 들어간다.
arr.sort(); //Array(5) [ 1, 2, 3, 4, 5 ]

// callback함수없이 입력 시 유니코드 순서에 따라 정렬한다.
// 1다음 2가 와야 하는데 14가 온다.
arr = [2, 5, 14, 3, 1];
arr.sort(); //Array(5) [ 1, 14, 2, 3, 5 ]
// 그래서 아래와 같이 function을 넣으면 정확하게 오름차순으로 정렬된다.
arr.sort((a, b) => a - b); // Array(5) [ 1, 2, 3, 5, 14 ]
// 아래와 같이 function을 넣으면 내림차순으로 정렬된다.
arr.sort((a, b) => b - a); // Array(5) [ 14, 5, 3, 2, 1 ]

/*
자바스크립트의 정확한 알고리즘은 아니지만
쉽게 정렬 알고리즘을 설명하면 이렇다.

[20, 10, 9,8,7,6,5,4,3,2,1]의 배열
(a,b) 형식으로 지정한 두 인자를 차례로 비교한다.

우선 배열 numbers[0]과 numbers[1] 즉, 20과 10을 비교한다.
20-10 = 10
결과값이 10 즉, 양수다.
sort함수에 sortNumber(a,b)의 return 값으로 양수 10을 전달한다.
그럼 sort함수가 양수값을 전달받고 배열의 순서를 바꾸어 버린다.
(정확하게 말하면 두 배열 안에 든 값을 교체)
그럼 배열이 [10, 20, 9,8,7,6,5,4,3,2,1] 이렇게 바뀐다.

그 다음 numbers[0]과 numbers[2] 즉 10과 9를 비교한다. 10 - 9 = 1 >0, 양수다.
결과값이 양수이므로 또 10과 9의 순서를 바꾼다.
이런 식으로 계속 두 인자를 비교해서 결과값이 양수가 나오면 순서를 바꾸고,
음수가 나오면 순서를 그대로 유지한다.

배열이 바뀌어가는 순서를 보면 이해하기 쉽다.

[(20), (10), 9,8,7,6,5,4,3,2,1] 20-10 = 10, 즉 양수이므로 순서바뀜! ()는 비교되는 인자값.
[(10), 20, (9),8,7,6,5,4,3,2,1] 10 - 9 = 1 또 양수, 순서 바뀜.
[(9), 20, 10, (8),7,6,5,4,3,2,1] 반복...
[(8), 20, 10, 9,(7)...]
...
[(2). 20, 10...3, (1)]
[(1), 20, 10...]

그럼 배열 내에서 가장 작은 값 1이 찾아지겠죠.

[1, 20, 10, 9,8,7,6,5,4,3,2]

1의 순서는 바뀌지 않습니다. 1-2 = -1
즉 결과값이 음수이기 때문이죠.

그 다음은 두번째 배열 차례입니다.
20 - 10 = 10 > 0 이므로 순서를 또 바꾼다.

[1, (20), (10), 9,8,7,6,5,4,3,2]
[1, (10), 20, (9), 8...]
[1, (9), 20, 10, (8)...]

이런 식으로 반복하다 보면 두번째로 작은 값 2도 찾게 됩니다.

....
[1, 2, 20, 10, 9,8,7,6,5,4,3]

그럼 다음은 세번째...
이렇게 지루하게 반복하면 결국 정렬이 됩니다.

물론 실제 자바스크립트에서는 비교하는 순서가 다르다.
다른 알고리즘을 쓴다.

이렇게 차례차례 비교해 나가면 인간이 이해하기는 쉽지만
연산량이 기하급수적으로 늘어나기 때문에 다른 정렬 알고리즘을 쓰는 것이죠.

실제로는
[20, 10, 9,8,7,6,5,4,3,2,1]
배열의 양쪽 끝부터 비교하고 (20, 1),
그 다음 배열의 가운데 값을 차례로 비교해 나간다. (1,6)
*/

// 6. 찾기
arr = ['apple', 'banana', 'grape']
// a. index Of: 인자로 들어오는 요소의 위치를 반환. 없을 시에는 -1반환
console.log(arr.indexOf('banana')); //1
console.log(arr.indexOf('mango')); //-1

// b. includes: 배열안에 해당아이템이 없는지 확인
console.log(arr.includes('grape')); //true
console.log(arr.includes('coco')); //false

// c. lastIndexOf: 배열안에 같은 값이 2개일때 제일 뒤에있는 값의 index를 가져온다.
arr.push('apple');
console.log(arr);
console.log(arr.indexOf('apple')); //0
console.log(arr.lastIndexOf('apple')); //3

// d. find:callback 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 callback 함수를 실행합니다. 
// 만약 어느 요소를 찾았다면 find 메서드는 해당 요소의 값을 즉시 반환하고, 그렇지 않았다면 undefined를 반환합니다.
// 배열안 object를 찾을 때 많이 쓰인다.
let objArr = [{
        name: 'apples',
        quantity: 2
    },
    {
        name: 'bananas',
        quantity: 0
    },
    {
        name: 'cherries',
        quantity: 5
    }
];
console.log(objArr.find((fruit) => fruit.name === 'apples')); //Object { name: "apples", quantity: 2 }


// 7. 활용 concat, join, slice, splice
arr = ['apple', 'banana'];
// a. concat: 두개 이상 배열들을 합쳐서 새 배열로 반환
const newArr = ['papaya', 'kiwi'];
const concatArr = newArr.concat(arr);
console.log(concatArr); //Array(4) [ "papaya", "kiwi", "apple", "banana" ]

// b. join: 배열 요소 사이에 문자를 삽입하여 문자열로 반환
arr = ['apple', 'banana', 'cherry', 'kiwi'];
console.log(arr.join('/')); //apple/banana/cherry/kiwi

// c. slice: 배열의 일부를 새 배열로 반환
// 첫번쨰 인자는 begin 두번째 인자는 end
arr = ['apple', 'banana', 'cherry', 'kiwi', 'lemon'];
// **end는 미포함
// arr[1] 부터 3번째 요소까지 복사
let sliceArr = arr.slice(1, 4); // [ "banana", "cherry", "kiwi" ]
// end가 생략되면 begin부터 배열끝까지 복사 
sliceArr = arr.slice(1); //  [ "banana", "cherry", "kiwi", "lemon" ]
// begin이 음수면 마지막부터 요소들이 복사 된다.
sliceArr = arr.slice(-2); //Array [ "kiwi", "lemon" ]
// end 음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. slice(2,-1) 는 세번째부터 끝에서 두번째 요소까지 추출합니다.
sliceArr = arr.slice(2, -1); //Array [ "cherry", "kiwi" ]

// d. splice: 기존 배열의 요소를 제거하고, 제거한 요소를 새 배열로 반환
// 첫번째 인자는 index이고 두번째 인자는 지울 숫자 갯수이다.
arr = ['apple', 'banana', 'cherry', 'kiwi'];
// index만 써줄경우 index기준으로 끝까지 모든 데이터가 꺼내진다.
console.log(arr.splice(2)); //Array [ "cherry", "kiwi" ]
// arr[2]요소부터 끝까지 모든 데이터가 삭제되고 새 배열로 반환
console.log(arr); //Array [ "apple", "banana" ]

arr= [ "apple", "banana", "strawberry", "melon", "orange" ]; 
// index와 지울 숫자 갯수를 써주면 index기준으로 지울 숫자 갯수만큼 지워진다.
console.log(arr.splice(2, 2)); //Array [ "strawberry", "melon" ]
// arr[2]요소부터 2개 데이터를 삭제하고 새 배열로 반환한다.
console.log(arr);

// 지울 숫자 갯수 옆에 item을 써주면 index기준으로 지울 숫자 갯수만큼 꺼내지고 item들이 그자리에 삽입된다.
arr.splice(1, 1, 'grape', 'pear');
// arr[1]자리에 있는 banana가 사라지고 grape, pear가 추가됐다
console.log(arr); //Array(4) [ "apple", "grape", "pear", "orange" ]

// index에 0을 넣으면 item들이 삭제되지않고 추가만 된다.
arr.splice(1, 0, 'mango', 'lemon');
console.log(arr); //Array(6) [ "apple", "mango", "lemon", "grape", "pear", "orange" ]

// 기존 배열을 변경하지 않는 메소드
//concat()
//join()
//slice()
// 기존 변경하는 메소드
//splice()