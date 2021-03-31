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

console.log(balanced("zips"));
console.log(balanced("brake"));