//In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.
//A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

//A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.

//Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

console.log(primalStrength(19));
//primalStrength(17)

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