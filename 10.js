//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


console.log(arrayOfMultiples(17,6));

function arrayOfMultiples (num, length) {
    let arr = [];
	for(let i = 1;i<=length;i++){
        arr.push(num*i);
    }
    return arr;
}