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
