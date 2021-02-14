//The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

//The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

console.log(multiplicativePersistence(4));

function additivePersistence(n) {
	let num = n.toString();
    if(num.length == 1){
        return 0 ;
    }
    let digit = num.split("");
    let flag = true;
    let sum = 0;
    let count = 0;
    while(true){
        count++;
        for(let i of digit){
            sum+=parseInt(i);
        }
        num = sum.toString();
        if(num.length == 1){
            break;
        }
        digit = num.split("");
        sum = 0;
    }
    return count;
}

function multiplicativePersistence(n) {
	let num = n.toString();
    if(num.length == 1){
        return 0 ;
    }
    let digit = num.split("");
    let sum = 1;
    let count = 0;
    while(true){
        count++;
        for(let i of digit){
            sum*=parseInt(i);
        }
        num = sum.toString();
        if(num.length == 1){
            break;
        }
        digit = num.split("");
        sum = 1;
    }
    return count;
}