//We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

console.log(balanced("brake"));
function balanced(word) {
    let left = 0;
    let right = 0;
    let PosL;
    let PosR;
    let sumL = 0;
    let sumR = 0;
    PosL = Math.floor(word.length/2)-1;
    if(word.length %2 == 0){
        PosR = PosL+1;
    }else{
        PosR = PosL+2;
    }
    for(let i = 0;i<=PosL;i++){//calLeft
        sumL+= word.charCodeAt(i)-96;
    }
    for(let i= PosR;i<word.length;i++){//calRigtht
        sumR+= word.charCodeAt(i)-96;
    }
    if(sumL === sumR){
        return true;
    }
    else{
        return false;
    }

}