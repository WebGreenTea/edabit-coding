//Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".
console.log(isExact(24));

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