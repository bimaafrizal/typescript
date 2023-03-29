//namespace
//namanya bebas
//agar bisa bebas menggunakan nama variabel atau classs yang sudah di deklarasikan file yang beda
namespace NamespaceExample {
    export class Person {

    }
    export const orang = new Person();
}
//cara memanggilnya
const orangSpace = new NamespaceExample.Person();

//generic menjadikan function menjadi tipe data yang lebih dinamis
function getData(value : any) {
    return value;
}
//kode diatas akan menjadi masalah karena typenya tidak diketahui sehingga misal input string tidak dapat menggunakan function length

function getData2<T>(value : T) {
    return value;
}
//T adalah type

const data2 = getData2<string>("test");
console.log(data2.length);

const data21 = getData2<number>(123);
console.log(data21.toFixed(2));
//jika menggunakan  function getData2 kita bisa mengetahui type data yang akan diinputkan dan menggunakan function bawaan


//generic interface
interface Generics<T> {
    propA: T
}

function genericsFunction<T>(value : T) : Generics<T> {
    let data: Generics<T> = {
        propA: value
    }

    return data;
}
console.log(genericsFunction<string>('safasffasf'));
console.log(genericsFunction<number>(1322));
console.log(genericsFunction<boolean>(true));


//generic type
type GenericsType<T> = T;

function genericsFunction2<T>(value : T) : GenericsType<T> {
    return value;
}
console.log(genericsFunction2<string>('safasffasf'));
console.log(genericsFunction2<number>(1322));
console.log(genericsFunction2<boolean>(true));

//generic class
interface GenericsClass<T> {
    propA : T,
    methodA() : T
}

class ClassGeneric<T> implements GenericsClass<T> {
    propA: T;

    constructor(prop : T) {
        this.propA = prop;
    }

    methodA(): T {
        return this.propA;
    }
}

//class sebagai type
const genericClassA = new ClassGeneric<number>(123);
console.log(genericClassA.methodA());

class ClassGeneric2 {
    name : string = 'Class A';
}

class ClassBaru<T> {
    constructor(classProp : T){}
}

const classA = new ClassGeneric2();
const classBaru = new ClassBaru(classA);

//constraint 
interface Length {
    length: number
}

function genericConstraint<T extends Length>(arg : T) {
    console.log(arg.length);
    return arg
}

console.log(genericConstraint("affdfasdsfaasdf"));

const genericCons = genericConstraint({length: 10, value: 200});
console.log(genericCons);


//class constraint
interface Product {
    sell() :void;
}

class CarProduct implements Product {
    sell(): void {
        console.log("jual mobil");
    }
}

class MotorProduct implements Product {
    sell(): void {
        console.log("jual motor");
    }
}

function sellProducts<T extends Product >(products : T[]) :void {
    products.forEach(product => product.sell());
}

const car = new CarProduct();
const motor = new MotorProduct();

sellProducts([car, motor]);

//type parameters generic constarint
function getProperty<T, U extends keyof T>(obj : T, key: U) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3};
console.log(x, "a");



