function primeNumber(a) {
    /* Your code here */
    for (var i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return "NO";
        }
    }
    return "YES";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
