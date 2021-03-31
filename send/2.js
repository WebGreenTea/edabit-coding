function digitsCount(num) {
    num = parseInt(num/10);
    if(num === 0){
        return 1;
    }
    let count = digitsCount(num);
    count++;
    return count;
}

console.log(digitsCount(4666));
console.log(digitsCount(544));
console.log(digitsCount(121317));
console.log(digitsCount(0));
console.log(digitsCount(12345));
console.log(digitsCount(1289396387328))