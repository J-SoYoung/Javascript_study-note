const bill = [275, 40, 430];
let tip = [];
let result = [];

function tipCalculator(bill) {
  for (let i = 0; i < bill.length; i++) {
    bill[i] >= 50 && bill[i] <= 300
      ? tip.push(bill[i] * 0.15)
      : tip.push(bill[i] * 0.2);
  }
  return tip;
}

function challengeResult(bill, tip) {
  for (let i = 0; i < bill.length; i++) {
    result.push(
      `The bill was ${bill[i]},the tip was ${tip[i]},and the total value ${
        bill[i] + tip[i]
      }`
    );
  }
  return result;
}

console.log(challengeResult(bill, tipCalculator(bill)));
