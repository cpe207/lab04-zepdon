function primeNumber(a) {
  /* Your code here */
  for (let i: number = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return "NO";
    }
  }
  return "YES";
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

// รหัส นศ.:640610692

// ชื่อ-สกุล :ปุญณพัฒน์ ภาณุมนต์วาที
