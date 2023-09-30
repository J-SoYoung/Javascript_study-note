let scoreDolphins = 0;
let scoreKoalas = 0;

function averageScore(s1, s2, s3) {
  return Number((s1 + s2 + s3) / 3).toFixed(2);
}

// challenge 1
scoreDolphins = averageScore(96, 108, 89);
scoreKoalas = averageScore(88, 91, 110);

// challenge 2
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}

// challenge 3
function checkMinScore(s1, s2, s3) {
  const minScore = 100;
  return s1 >= minScore && s2 >= minScore && s3 >= minScore;
}
scoreDolphins = averageScore(97, 122, 101);
scoreKoalas = averageScore(109, 101, 106);
const checkMinScoreDolphins = checkMinScore(97, 122, 101);
const checkMinScoreKoalas = checkMinScore(109, 101, 106);

if (scoreDolphins > scoreKoalas) {
  if (checkMinScoreDolphins) {
    console.log("Dolphins win the trophy, 짱짱맨");
  } else {
    console.log("Dolphins win the trophy, 이겼지만 미니멈 못넘음");
  }
} else if (scoreDolphins < scoreKoalas) {
  if (checkMinScoreKoalas) {
    console.log("Koalas win the trophy, 짱짱맨");
  } else {
    console.log("Koalas win the trophy, 이겼지만 미니멈 못넘음");
  }
} else {
  console.log("Both win the trophy");
}

// challenge 4
scoreDolphins = averageScore(97, 112, 101);
scoreKoalas = averageScore(109, 95, 106);

// 100점 이하인 점수를 찾고, 그 둘을 비교
function searchMinScore(s1, s2, s3) {
  const arr = [s1, s2, s3];
  let min = 0;
  for (let i = 0; i < 3; i++) {
    if (arr[i] < 100) min = arr[i];
  }
  return min;
}
const minScoreDolphins = searchMinScore(97, 112, 101);
const minScoreKoalas = searchMinScore(109, 95, 106);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  minScoreDolphins > minScoreKoalas
    ? console.log("동점이지만, 최소점수가 높음!! Dolphins win the trophy")
    : console.log("동점이지만, 최소점수가 높음!! Koalas win the trophy");
}
