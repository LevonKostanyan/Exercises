let numbers = [];

let devide3 = 21;

for (let i = devide3; i > 0; i--) {
    if (i % 3 === 0) {
        numbers.push(i);
    }
}
console.log(numbers);