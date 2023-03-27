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
