const numbers = "173";

function solution(numbers) {
    var answer = 0;
    var n = numbers.split('');
    var nums = new Set();
    permutation(n, '');

    function permutation(a, s) {
        if (s.length > 0) {
            console.log('first if');
            if (nums.has(Number(s)) === false) {
                nums.add(Number(s));
                console.log(Number(s))
                nums.forEach(a => console.log(`nums: ${a}`))
                if (chkPrime(Number(s))) {
                    answer++;
                }
            }
        }
        if (a.length > 0) {
            console.log('second if');

            for (var i = 0; i < a.length; i++) {
                var t = a.slice(0)
                console.log(`t: ${t}`);
                t.splice(i, 1);
                console.log(t, s + a[i]);
                permutation(t, s + a[i]);
            }
        }
    }

    function chkPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return answer;
}

let answer = solution(numbers);
$('#header')
    .html("<p>" + answer + "</p>")


console.log(`답은: ${answer}`);