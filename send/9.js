function primalStrength(n) {
	let before = n-1;
    let after = n+1;
    while(!isprime(before)){
        before--;
    }
    while(!isprime(after)){
        after++;
    }
    before = n-before;
    after = after-n;
    if(before === after){
        return ("Balanced");
    }
    else if(before<after){
        return("Weak");
    }
    else{
        return("Strong");
    }


}
function isprime(n){
    if(n == 0 || n == 1){
        return false;
    }
    let m= n/2;
    for(let i = 2;i<=m;i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

console.log(primalStrength(211));
console.log(primalStrength(17));
console.log(primalStrength(19));