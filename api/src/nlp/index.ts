import ents from './entities';
const Az = require('az');
console.log({ ents });
Az.Morph.init('src/nlp/dicts', (r) => {
  console.log(r);
});

export class NaturalLangPr {
  public static getResult(input: string) {
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

    for (const entId in ents.entities) {
      let count = 0;
      if (Object.prototype.hasOwnProperty.call(ents.entities, entId)) {
        const entity = ents.entities[entId];
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
        result.push({ ...ents.entities[entId], score: count });
      }
    }

    result.sort(function (a, b) {
      return b.score - a.score;
    });

    return result;
  }
}
