const array = new Array(25).fill('').map(() => Math.round(Math.random() * 150))

let numbers = [...array];

let newArrayZero = numbers.map(function (value, index) {
        if (index % 2 === 0) {
            return 0
        } else {
            return 1
        }
    }
)
console.log(newArrayZero);