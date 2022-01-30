const simple = [5];

let number = 200;

for (let i = 0; i < number; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
        simple.push(i);
    }
}

console.log(simple);