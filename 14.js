//Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

console.log(sumDigProd(111111));

function sumDigProd(...n) {
    let sum = 0;
	if(n.length != 1){
        for(let i= 0;i<n.length;i++){//sum
            sum+=n[i];
        }
    }
    else{
        sum = n[0];
    }
    
    
    let num = sum.toString();
    let digit = num.split("");
    sum = 1;
    while(true){
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
    return sum;
}