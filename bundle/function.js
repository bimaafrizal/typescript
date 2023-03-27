"use strict";
//function memiliki type return string,
//jika tidak ada return maka typenya void
function create() {
    return "Hello";
}
let create2 = () => "Hello world";
function add(x, y) {
    return `${x} ditambah ${y} hasilnya ${x + y}`;
}
console.log(create());
console.log(create2());
console.log(add(20, 30));
