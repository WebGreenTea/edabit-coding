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

console.log(sumDigProd(16, 28));
console.log(sumDigProd(0));
console.log(sumDigProd(1, 2, 3, 4, 5, 6));
