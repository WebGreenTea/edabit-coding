//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
let test = [1,2,5,07,3,3];

console.log(sevenBoom(test));
function sevenBoom(arr) {
	let y;
	for(let x of arr){
        y = x.toString();
        for(let z of y){
            if(z == "7"){
                return "Boom!";
            }
        }
	}
	return "there is no 7 in the array";
}