// 배열 array 


// 1. 배열 선언
// 선언방법 1: new Array 인자없이 선언시 동적인 크기 배열 만듦
const arr1 = new Array(); //Array []

// 선언방법 2: new Array 인자 하나로 숫자3이 들어갔을 때는 길이가 3인 빈 배열 만듦
const arr2 = new Array(3); //Array(3) [ <3 empty slots> ]
// 이때 인자를 push 할 시 3개의 빈공간을 놔두고 요소가 하나 추가되고 길이가 4로 바뀐다.
arr2.push(1); //Array(4) [ <3 empty slots>, 1 ]

// 선언방법 3: new Array 인자로 숫자 여러개인 1,2,3이 들어갔을 때는 1,2,3요소가 들어있는 배열길이가 3인 배열을 만듦 
const arr3 = new Array(1, 2, 3);//Array(3) [ 1, 2, 3 ]

// 선언방법 4: Array.of 인자로 숫자3이 들어갔을 때는 3요소가 들어있는 배열길이가 1인 배열을 만듦 
const arr4 = Array.of(3); //Array [ 3 ]

// 선언방법 5: 대괄호 안에 숫자 1,2,3이 들어갔을 때는 3요소가 들어있는 배열길이가 3인 배열을 만듦 
const arr5 = [1,2,3]; //Array(3) [ 1, 2, 3 ]

// 선언방법 6: Array.from 인자로 숫자 1,2,3이 들어갔을 때는 3요소가 들어있는 배열길이가 3인 배열을 만듦 
const arr6 = Array.from([1,2,3]); //Array(3) [ 1, 2, 3 ]

// 선언방법 7: Array.from 에는 첫번쨰 인자로 중괄호 안에 length값을 집어넣고, 두번째는 function으로 0으로 리셋해서 만들수도있다. 
const arr7 = Array.from({length:3},() => 0); //Array(3) [ 0, 0, 0 ]

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
// push: 배열 맨 뒤에 삽입 O(1)
arr.push('melon'); //Array(3) [ "apple", "banana", "melon" ]

// pop: 배열 맨 뒤에 있는 요소 빼서 반환 O(1)
console.log(arr.pop()); //melon
console.log(arr); //Array [ "apple", "banana" ]

// unshift: 배열 맨 앞에 삽입 O(n)
arr.unshift('lemon','orange');
console.log(arr); //Array(4) [ "lemon", "orange", "apple", "banana" ]

// shift: 배열 맨 앞에 있는 요소 빼서 반환 O(n)
console.log(arr.shift()); //lemon
console.log(arr); //Array(3) [ "orange", "apple", "banana" ]

// note!! shift and unshift are slower than pop, push
// shift와 unshift는 pop push와 같이 빈공간에 데이터를 넣는것이 아니라
// 앞에서 부터 들어있는 item들을 뒤로 옮겨 자리를 만든 다음 넣는것이라 오래걸린다


// 7. 활용 concat, join, slice, splice
arr = ['apple', 'banana'];
// concat: 두개 이상 배열들을 합쳐서 새 배열로 반환
const newArr = ['papaya', 'kiwi'];
const concatArr =newArr.concat(arr);
console.log(concatArr); //Array(4) [ "papaya", "kiwi", "apple", "banana" ]

// join: 배열 요소 사이에 문자를 삽입하여 문자열로 반환
arr = ['apple', 'banana', 'cherry', 'kiwi'];
console.log(arr.join('/')); //apple/banana/cherry/kiwi

// splice: 기존 배열의 요소를 제거하고, 제거한 요소를 새 배열로 반환
// 첫번째 인자는 index이고 두번째 인자는 지울 숫자 갯수이다.
arr = ['apple', 'banana', 'cherry', 'kiwi'];
console.log(arr); //Array(4) [ "apple", "banana", "cherry", "kiwi" ]
// index만 써줄경우 index기준으로 끝까지 모든 데이터가 꺼내진다.
console.log(arr.splice(2)); //Array [ "cherry", "kiwi" ]
// arr[2]요소부터 끝까지 모든 데이터가 삭제되고 새 배열로 반환
console.log(arr); //Array [ "apple", "banana" ]
arr.push('strawberry', 'melon', 'orange'); //Array(5) [ "apple", "banana", "strawberry", "melon", "orange" ]

// index와 지울 숫자 갯수를 써주면 index기준으로 지울 숫자 갯수만큼 지워진다.
console.log(arr.splice(2,2)); //Array [ "strawberry", "melon" ]
// arr[2]요소부터 2개 데이터를 삭제하고 새 배열로 반환한다.
console.log(arr);

// 지울 숫자 갯수 옆에 item을 써주면 index기준으로 지울 숫자 갯수만큼 꺼내지고 item들이 그자리에 삽입된다.
arr.splice(1,1,'grape','pear'); 
// arr[1]자리에 있는 banana가 사라지고 grape, pear가 추가됐다
console.log(arr); //Array(4) [ "apple", "grape", "pear", "orange" ]

// index에 0을 넣으면 item들이 삭제되지않고 추가만 된다.
arr.splice(1,0,'mango','lemon'); 
console.log(arr); //Array(6) [ "apple", "mango", "lemon", "grape", "pear", "orange" ]

// 5. Looping 


// 6. 정렬

// 7. 찾기


// index Of: 인자로 들어오는 요소의 위치를 반환. 없을 시에는 -1반환
console.log(arr.indexOf('banana')); //1
console.log(arr.indexOf('mango')); //-1

// find:callback 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 callback 함수를 실행합니다. 
// 만약 어느 요소를 찾았다면 find 메서드는 해당 요소의 값을 즉시 반환하고, 그렇지 않았다면 undefined를 반환합니다.
// 배열안 object를 찾을 때 많이 쓰인다.
let objArr = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
console.log(objArr.find((fruit) => fruit.name === 'apples')); //Object { name: "apples", quantity: 2 }

