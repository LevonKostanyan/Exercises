// 1, 1, 2, 3, 5, 8, 13, 21, 34

let numbers = [];

let Fibonacci = 10;

let result = 1;

for (let i = 0; i < Fibonacci; i++) {
    numbers.push(result)
    result = numbers[i] + (numbers[i - 1] || 0)
}
console.log(numbers);