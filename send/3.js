function isExact(n) {
    let sum = 1;
    for(let i = 1;sum<n;i++){
        if(sum*i == n){
            let arr = [n,i]
            return arr;
        }
        
        sum*=i;
        
    }
    return "Not exact!";
}

console.log(isExact(6));
console.log(isExact(24));
console.log(isExact(125));
console.log(isExact(720));
console.log(isExact(1024));
console.log(isExact(40320));