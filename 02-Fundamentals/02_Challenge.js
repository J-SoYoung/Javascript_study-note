const bills = [125, 555, 44];

const tips = bills.map((b) => {
  return b >= 50 && b <= 300 ? b * 0.15 : b * 0.2;
});
console.log(tips);

const total = tips.map((t, idx) => {
  return `The bill was ${bills[idx]}, the tip was ${t}, and the total value ${
    bills[idx] + t
  }`;
});
console.log(total);
