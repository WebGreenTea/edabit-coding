//Create a function that will recursively count the number of digits of a number. Conversion of the number to a string is not allowed, thus, the approach is recursive.

console.log(digitsCount(46668456321569843265));


/*function digitsCount(num) {
	let count = 1;
    while(true){
        num = parseInt(num/10);
        if(num === 0){
            break;
        }
        count++;
    }
    return count;
}*/


function digitsCount(num) {
    num = parseInt(num/10);
    if(num === 0){
        return 1;
    }
    let count = digitsCount(num);
    count++;
    return count;
}