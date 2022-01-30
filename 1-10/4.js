let a_1 = 2;
let d = 4;
let edge = 40;

let arr = [];

let a = a_1;

for (let i = 0; i < edge; i++) {
    arr.push(a)
    a = a + d
}
console.log(arr);