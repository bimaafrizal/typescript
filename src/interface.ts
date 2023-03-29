type Core = 1 | 3 | 4 | 5 | 6 | "dual core";

interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core //component core total hanya bisa diisi dengan yang sudah ditentukan
    clockSpeed: number;
}

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface Amd extends IProcessor {
    precisionBoost?: boolean; //bersifat nullable atau opsional
}

function createIntel(processor: Intel) : void {
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

function createAmd(processor: Amd) : void {
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

const intelCoreI5: Intel = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSpeed: 4,
    coreTotal: 4,
    turboBoost: true,
}
const amdRyzen3: Amd = {
    brand: "AMD",
    baseModel: "ryzen 3",
    modelName: "r05570x",
    clockSpeed: 6,
    coreTotal: "dual core",
}

createIntel(intelCoreI5);
createAmd(amdRyzen3);


//interface extends class
class Animal {
    constructor(public name : string) {}
}

interface IShark extends Animal {
    swim() :void;
}

class Shark implements IShark{

    constructor(public name : string){}

    swim(): void {
        console.log('Awiwkwkwkwk');
    }
}

//dependency injection
//mnginjek class ke class lain secara dinamis
class Store {
    private name: string = 'Store A';
    private profit: number = 1000;

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }
}
class Store2 {
    private name: string = 'Store 2';
    private profit: number = 10000;

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }
}

class FashionProduct {
    private store : Store;

    constructor(private name: string, private price: number) {
        this.store = new Store();
    }

    sell() : void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}
class TechProduct {
    private store : Store;

    constructor(private name: string, private price: number) {
        this.store = new Store();
    }

    sell() : void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const baju = new FashionProduct('Baju lengan panjang', 50000);
baju.sell();

//dependency

interface IStore {
    name: string;
    profit: number;
    getProfit(): number;
}

class TokoLama implements IStore {
    name: string = 'Toko Baru';
    profit: number= 2500;

    getName() : string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class TokoBaru implements IStore {
    name: string = 'Toko Baru';
    profit: number= 2500;

    getName() : string {
        return this.name;
    }

    getProfit(): number {
        return this.profit;
    }
}

class HijabProduct {

    constructor(private store : IStore, private name: string, private price: number) {
    }

    sell() : void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}
class FoodProduct {

    constructor(private store : IStore, private name: string, private price: number) {
    }

    sell() : void {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
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
