"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaturalLangPr = void 0;
const entities_1 = require("./entities");
const Az = require('az');
console.log({ ents: entities_1.default });
Az.Morph.init('src/nlp/dicts', (r) => {
    console.log(r);
});
class NaturalLangPr {
    static getResult(input) {
        const result = [];
        const arr = input.replace(/[^а-яА-Я ]/gm, '').split(' ');
        const morphems = [];
        for (const index in arr) {
            const word = arr[index];
            const morph = Az.Morph(word);
            if (Object.keys(morph).length > 0) {
                const normalized = morph[0].normalize(true).word;
                morphems.push(normalized);
            }
        }
        for (const entId in entities_1.default.entities) {
            let count = 0;
            if (Object.prototype.hasOwnProperty.call(entities_1.default.entities, entId)) {
                const entity = entities_1.default.entities[entId];
                const kw = entity.keywords;
                for (const mId in morphems) {
                    if (Object.prototype.hasOwnProperty.call(morphems, mId)) {
                        const lemma = morphems[mId];
                        if (kw.includes(lemma)) {
                            count += 1;
                        }
                    }
                }
            }
            if (count > 0) {
                result.push(Object.assign(Object.assign({}, entities_1.default.entities[entId]), { score: count }));
            }
        }
        result.sort(function (a, b) {
            return b.score - a.score;
        });
        return result;
    }
}
exports.NaturalLangPr = NaturalLangPr;
//# sourceMappingURL=index.js.map