class User {
    constructor(public name : string, public age: number) {}
}

class Admin extends User {
    constructor(name : string, age : number, public is_admin : boolean) {
        super(name, age);
    }
}

let user = new User("bima", 21);
let admin = new Admin("admin", 21, true)
console.log(user);
console.log(admin);


//readonly modifier => hanya bisa digunakan dan tidak bisa dirubah datanya
class Person {
    readonly gender: string = "Pria";
}

const person = new Person();
// person.gender = 'Wanita'; //akan error