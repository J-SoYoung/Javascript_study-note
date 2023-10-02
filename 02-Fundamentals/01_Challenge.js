const scoreDolphins = [44, 23, 71];
const scoreKoalas = [65, 54, 49];

function calcAverage(score) {
  let allSum = 0;
  for (let i = 0; i < score.length; i++) {
    allSum += score[i];
  }
  return allSum / score.length;
}
const averageDol = calcAverage(scoreDolphins);
const averageKoa = calcAverage(scoreKoalas);

function checkWinner(dolphins, koalas) {
  dolphins > koalas
    ? console.log(`Dolphins Win ${dolphins}(dophins) vs ${koalas}(koalas)`)
    : console.log(`Koalas Win ${koalas}(koalas) vs ${dolphins}(dolphins)`);
}
checkWinner(averageDol, averageKoa);
