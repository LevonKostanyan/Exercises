const array1 = new Array(25).fill('').map(() => Math.round(Math.random() * 150))

let numbers = [...array1];

let newArrayZero = numbers.map(() => {
        return 0
    }
)
newArrayZero.push(1);
newArrayZero.unshift(1);

console.log(newArrayZero);

