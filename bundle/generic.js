"use strict";
//generic menjadikan function menjadi tipe data yang lebih dinamis
function getData(value) {
    return value;
}
//kode diatas akan menjadi masalah karena typenya tidak diketahui sehingga misal input string tidak dapat menggunakan function length
function getData2(value) {
    return value;
}
//T adalah type
const data2 = getData2("test");
console.log(data2.length);
const data21 = getData2(123);
console.log(data21.toFixed(2));
function genericsFunction(value) {
    let data = {
        propA: value
    };
    return data;
}
console.log(genericsFunction('safasffasf'));
console.log(genericsFunction(1322));
console.log(genericsFunction(true));
function genericsFunction2(value) {
    return value;
}
console.log(genericsFunction2('safasffasf'));
console.log(genericsFunction2(1322));
console.log(genericsFunction2(true));
class ClassGeneric {
    constructor(prop) {
        this.propA = prop;
    }
    methodA() {
        return this.propA;
    }
}
//class sebagai type
const genericClassA = new ClassGeneric(123);
console.log(genericClassA.methodA());
class ClassGeneric2 {
    constructor() {
        this.name = 'Class A';
    }
}
class ClassBaru {
    constructor(classProp) { }
}
const classA = new ClassGeneric2();
const classBaru = new ClassBaru(classA);
function genericConstraint(arg) {
    console.log(arg.length);
    return arg;
}
console.log(genericConstraint("affdfasdsfaasdf"));
const genericCons = genericConstraint({ length: 10, value: 200 });
console.log(genericCons);
class CarProduct {
    sell() {
        console.log("jual mobil");
    }
}
class MotorProduct {
    sell() {
        console.log("jual motor");
    }
}
function sellProducts(products) {
    products.forEach(product => product.sell());
}
const car = new CarProduct();
const motor = new MotorProduct();
sellProducts([car, motor]);
//type parameters generic constarint
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3 };
console.log(x, "a");
