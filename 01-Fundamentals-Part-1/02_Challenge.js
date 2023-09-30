const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

function BMICarculator(mass, height) {
  return mass / height ** 2;
}
const BMIMark = BMICarculator(massMark, heightMark);
const BMIJohn = BMICarculator(massJohn, heightJohn);

// challenge 1
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

function BMIRound(BMI) {
  return Math.floor(BMI * 100) / 100;
}

// challenge 2
BMIMark > BMIJohn
  ? console.log(
      `Mark's BMI ${BMIRound(BMIMark)} is higher than John's ${BMIRound(
        BMIJohn
      )}!`
    )
  : console.log(
      `John's BMI ${BMIRound(BMIJohn)} is higher than Mark's ${BMIRound(
        BMIMark
      )}!`
    );
