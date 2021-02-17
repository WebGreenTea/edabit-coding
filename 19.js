//You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
//If you can't find Nemo, return "I can't find Nemo :(".
console.log(findNemo("I Nemo am"));

function findNemo(str){
    let arr = str.split(" ");
    let res;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === "Nemo"){
            res = i+1;
            return "I found Nemo at "+res+"!";
        }
    }
    return "I can't find Nemo :(";
    
}