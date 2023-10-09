const mark = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = Number(this.mass / this.height ** 2).toFixed(2));
  },
};

const john = {
  fullName: "John",
  mass: 90,
  height: 1.75,
  calcBMI: function () {
    return (this.BMI = Number(this.mass / this.height ** 2).toFixed(2));
  },
};

function BMIcompare() {
  console.log(`mark's BMI(${mark.calcBMI()}), john's BMI(${john.calcBMI()}) 
  ${
    mark.calcBMI() > john.calcBMI()
      ? "mark is higher than john"
      : "john is higher than mark"
  }`);
}

BMIcompare();
