let numbers = [];

let divide3 = 21;

for (let i = divide3; i > 0; i--) {
    if (i % 3 === 0) {
        numbers.push(i);
    }
}
console.log(numbers);