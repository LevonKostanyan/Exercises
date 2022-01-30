// [index % 5, 1, index % 5, 1, ...]

const numbers = [];

let num = 11;

for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
        numbers.push(1);
    } else {
        numbers.push(i % 5)
    }
}

console.log(numbers);