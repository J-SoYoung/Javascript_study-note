// Data1 ----------------------------------------
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

function BMICarculator(mass, height) {
  return mass / height ** 2;
}
const BMIMark = BMICarculator(massMark, heightMark);
const BMIJohn = BMICarculator(massJohn, heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log("BMIMark-", BMIMark);
console.log("BMIJohn-", BMIJohn);
console.log(`BMIMark > BMIJohn = ${markHigherBMI}`);

// Data2 ----------------------------------------
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = BMICarculator(massMark2, heightMark2);
const BMIJohn2 = BMICarculator(massJohn2, heightJohn2);
const markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log("BMIMark2-", BMIMark2);
console.log("BMIJohn2-", BMIJohn2);
console.log(`BMIMark2 > BMIJohn2 = ${markHigherBMI2}`);
