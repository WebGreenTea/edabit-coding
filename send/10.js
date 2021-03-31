function minSwaps(s1, s2) {
    let count = 0;
	for(let i = 0;i<s1.length;i++){
        if(s1.charAt(i) == 1 && s2.charAt(i) == 0){
            count++;
        }
    }
    return count;
}

console.log(minSwaps("1100", "1001"));
console.log(minSwaps("110011", "010111"));
console.log(minSwaps("10011001", "01100110"));