//function memiliki type return string,
//jika tidak ada return maka typenya void
function create() : string {
    return "Hello";
}

let create2 = () : string  => "Hello world";

function add(x: number, y: number): string {
    return `${x} ditambah ${y} hasilnya ${x+y}`;
}

console.log(create());
console.log(create2());
console.log(add(20, 30));