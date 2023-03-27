console.log("Bima Afrizal Malna");
let namaSaya: string = "Bima Afrizal Malna";
let username: number = 12345;
let isDead: boolean = true;

//jika tidak sesuai dengan type data maka akan error
//jika tidak declare type data maka bisa input semua dan typenya menjadi any, contoh:
let testAny;
testAny = 'safsafdsfa';

//multi typedata
let multi : number | string ;

//type data  array
//array biasa
let arrayDataBiasa: string[];
arrayDataBiasa = ['data1' , 'data2', 'data3', 'data4'];

//tuple type arrray, isi dari array per index harus sesuai(datanya terbatas)
let arrayData : [string, string, number];
arrayData = ["ariel", 'sophia', 122];

//type data custom
type Teman = {
    nama:string;
    isKampret:boolean;
    hutang:number;
};

//variabel temanKita bertipe Teman
let temanKita: Teman;
temanKita = {
    nama: 'Bima',
    hutang:0,
    isKampret:true
};

console.log(namaSaya);
//perbedaan dari atas bawah dan atas terlihat ketika running, yang bawah hasilnya ada nama variael
console.log({username});
console.log({isDead});
console.log({testAny});
console.log({arrayDataBiasa});
console.log({arrayData});
console.log({temanKita});
