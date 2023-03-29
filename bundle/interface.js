"use strict";
function createIntel(processor) {
    console.log(`
    ----
    terimakasuh ${processor.brand}, 
    ----
    anda telah berhasil membuat processor dengan detail berikut:

    nama base model: ${processor.baseModel},
    nama model: ${processor.modelName},
    total core: ${processor.coreTotal},
    kecepatan clock: ${processor.clockSpeed},
    apakah turbo boost? ${processor.turboBoost}
    `);
}
function createAmd(processor) {
    console.log(`
    ----
    terimakasuh ${processor.brand}, 
    ----
    anda telah berhasil membuat processor dengan detail berikut:

    nama base model: ${processor.baseModel},
    nama model: ${processor.modelName},
    total core: ${processor.coreTotal},
    kecepatan clock: ${processor.clockSpeed},
    apakah precision boost? ${processor.precisionBoost ? processor.precisionBoost : 'tidak ada'}
    `);
}
const intelCoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSpeed: 4,
    coreTotal: 4,
    turboBoost: true,
};
const amdRyzen3 = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r05570x",
    clockSpeed: 6,
    coreTotal: "dual core",
};
createIntel(intelCoreI5);
createAmd(amdRyzen3);
//interface extends class
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Shark {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log('Awiwkwkwkwk');
    }
}
//dependency injection
//mnginjek class ke class lain secara dinamis
class Store {
    constructor() {
        this.name = 'Store A';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class Store2 {
    constructor() {
        this.name = 'Store 2';
        this.profit = 10000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class FashionProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class TechProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const baju = new FashionProduct('Baju lengan panjang', 50000);
baju.sell();
class TokoLama {
    constructor() {
        this.name = 'Toko Baru';
        this.profit = 2500;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TokoBaru {
    constructor() {
        this.name = 'Toko Baru';
        this.profit = 2500;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class HijabProduct {
    constructor(store, name, price) {
        this.store = store;
        this.name = name;
        this.price = price;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class FoodProduct {
    constructor(store, name, price) {
        this.store = store;
        this.name = name;
        this.price = price;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();
const hijab = new HijabProduct(tokoLama, 'hijab mahal', 80000);
const hijabMahal = new HijabProduct(tokoLama, 'hijab lebih mahal', 80000);
console.log(hijab);
console.log(hijabMahal);
hijab.sell();
hijabMahal.sell();
