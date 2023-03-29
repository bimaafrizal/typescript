"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Admin extends User {
    constructor(name, age, is_admin) {
        super(name, age);
        this.is_admin = is_admin;
    }
}
let user = new User("bima", 21);
let admin = new Admin("admin", 21, true);
console.log(user);
console.log(admin);
//readonly modifier => hanya bisa digunakan dan tidak bisa dirubah datanya
class Person {
    constructor() {
        this.gender = "Pria";
    }
}
const person = new Person();
// person.gender = 'Wanita'; //akan error
