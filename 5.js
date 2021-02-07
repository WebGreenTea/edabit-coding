//Create a function which returns the number of true values there are in an array.
let arr = [];
console.log(countTrue(arr));


function countTrue(arr) {
    let count = 0;
	 for(let x of arr){
        if(x){
            count++;
        }
     }
     return count;
}