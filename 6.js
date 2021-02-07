//Write a function that returns the minimum number of swaps to convert the first binary string into the second.


console.log(minSwaps("1100", "1001"));
function minSwaps(s1, s2) {
    let count = 0;
	for(let i = 0;i<s1.length;i++){
        if(s1.charAt(i) == 1 && s2.charAt(i) == 0){
            count++;
        }
    }
    return count;
}