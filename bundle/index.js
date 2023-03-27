"use strict";
console.log("Bima Afrizal Malna");
let namaSaya = "Bima Afrizal Malna";
let username = 12345;
let isDead = true;
//jika tidak sesuai dengan type data maka akan error
//jika tidak declare type data maka bisa input semua dan typenya menjadi any, contoh:
let testAny;
testAny = 'safsafdsfa';
//multi typedata
let multi;
//type data  array
//array biasa
let arrayDataBiasa;
arrayDataBiasa = ['data1', 'data2', 'data3', 'data4'];
//tuple type arrray, isi dari array per index harus sesuai(datanya terbatas)
let arrayData;
arrayData = ["ariel", 'sophia', 122];
//variabel temanKita bertipe Teman
let temanKita;
temanKita = {
    nama: 'Bima',
    hutang: 0,
    isKampret: true
};
let sayaData;
//datanya bisa jadi string dan number karena typenya bersifat string atau number
sayaData = 1;
sayaData = "aadasfafdfdsfa";
console.log(namaSaya);
//perbedaan dari atas bawah dan atas terlihat ketika running, yang bawah hasilnya ada nama variael
console.log({ username });
console.log({ isDead });
console.log({ testAny });
console.log({ arrayDataBiasa });
console.log({ arrayData });
console.log({ temanKita });
