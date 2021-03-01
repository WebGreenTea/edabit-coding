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
//////////////////
//Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

//For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

console.log(oddishOrEvenish(286));
function oddishOrEvenish(num) {
    let z = num.toString();
    let sum = 0;
    for(let x of z){
        sum+= parseInt(x);
    }
    if(sum%2 == 0){
        return "Evenish";
    }
    else{
        return "Oddish";
    }
}
//////////////////
//Create a function that takes two dates and returns the number of days between the first and second date.

var date1 = new Date("June 14, 2019"); 
var date2 = new Date("June 20, 2019"); 

let x = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 *24);
console.log(x);
//////////////////
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
///////////////
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
//////////////////
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
////////////////////
//Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
//{other person name} is {older than / younger than / the same age as} me.
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if(this.age>other.age){
            return other.name + " is younger than me.";
        }
        else if(this.age<other.age){
            return other.name + " is older than me.";
        }
        else{
            return other.name + " is the same age as me.";
        }
	}
}


p1 = new  Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)
console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))


///////////////////
//Create a function that will recursively count the number of digits of a number. Conversion of the number to a string is not allowed, thus, the approach is recursive.

console.log(digitsCount(46668456321569843265));


/*function digitsCount(num) {
	let count = 1;
    while(true){
        num = parseInt(num/10);
        if(num === 0){
            break;
        }
        count++;
    }
    return count;
}*/


function digitsCount(num) {
    num = parseInt(num/10);
    if(num === 0){
        return 1;
    }
    let count = digitsCount(num);
    count++;
    return count;
}
/////////////////////
//Write a recursive function that filters the items in an array (given as parameter arr) by positional parity (odd or even), given as parameter par, starting from the opposite end. Return an array of items on odd positions (... 5, 3, 1) or on even positions (... 6, 4, 2) and counting from the last item in the array.

console.log(getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even"));

function getItemsAt(arr, par) {
    let temp;
	if(arr.length % 2 == 0){
        if(par === "odd"){
            let st = [arr[1]];
            if(arr.length == 2){
                return st;
            }
            arr.shift();
            arr.shift();
            temp = getItemsAt(arr,"odd");
            for(let i = 0;i<temp.length;i++){
                st.push(temp[i]);
            }
            return st;
        }
        else{
            let st = [arr[0]];
            if(arr.length == 2){
                return st;
            }
            arr.shift();
            arr.shift();
            temp = getItemsAt(arr,"even");
            for(let i = 0;i<temp.length;i++){
                st.push(temp[i]);
            }
            return st;
        } 
    }
    else{
        if(par === "odd"){
            let st = [arr[0]];
            if(arr.length == 1){
                return st;
            }
            arr.shift();
            arr.shift();
            temp = getItemsAt(arr,"odd");
            for(let i = 0;i<temp.length;i++){
                st.push(temp[i]);
            }
            return st;
        }
        else{
            let st = [arr[1]];
            if(arr.length == 3){
                return st;
            }
            arr.shift();
            arr.shift();
            temp = getItemsAt(arr,"even");
            for(let i = 0;i<temp.length;i++){
                st.push(temp[i]);
            }
            return st;
        }
    }
}
//////////////////
//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


console.log(arrayOfMultiples(17, 6));

function arrayOfMultiples(num, length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i);
    }
    return arr;
}
//////////////

console.log(trackRobot(-10, 20, 10));

function trackRobot(...steps) {
    let x = 0;
    let y = 0;
    let direction = 1;
    for (let i of steps) {
        if (direction == 1) {
            y += i;
        }
        else if (direction == 2) {
            x += i;
        }
        else if (direction == 3) {
            y -= i;
        }
        else {
            x -= i;
        }

        direction++;
        if (direction == 5) {
            direction = 1;

        }
    }
    return [x, y];
}
/////////////////////
//The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

//The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

console.log(multiplicativePersistence(4));

function additivePersistence(n) {
	let num = n.toString();
    if(num.length == 1){
        return 0 ;
    }
    let digit = num.split("");
    let flag = true;
    let sum = 0;
    let count = 0;
    while(true){
        count++;
        for(let i of digit){
            sum+=parseInt(i);
        }
        num = sum.toString();
        if(num.length == 1){
            break;
        }
        digit = num.split("");
        sum = 0;
    }
    return count;
}

function multiplicativePersistence(n) {
	let num = n.toString();
    if(num.length == 1){
        return 0 ;
    }
    let digit = num.split("");
    let sum = 1;
    let count = 0;
    while(true){
        count++;
        for(let i of digit){
            sum*=parseInt(i);
        }
        num = sum.toString();
        if(num.length == 1){
            break;
        }
        digit = num.split("");
        sum = 1;
    }
    return count;
}
///////////////////////
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
//////////////////
//Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

console.log(sumDigProd(111111));

function sumDigProd(...n) {
    let sum = 0;
	if(n.length != 1){
        for(let i= 0;i<n.length;i++){//sum
            sum+=n[i];
        }
    }
    else{
        sum = n[0];
    }
    
    
    let num = sum.toString();
    let digit = num.split("");
    sum = 1;
    while(true){
        for(let i of digit){
            sum*=parseInt(i);
        }
        num = sum.toString();
        if(num.length == 1){
            break;
        }
        digit = num.split("");
        sum = 1;
    }
    return sum;
}
/////////////////////////
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
/////////////////////
//Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

//The words and, the, of and in should be lowercase.
//All other words should have the first character as uppercase and the rest lowercase.


console.log(correctTitle("Mance Rayder, King-Beyond-the-Wall"));

function correctTitle(str) {
    let arrstr = str.split(/ |-/);
    let res = "";
    let count = 0;
    for (let i of arrstr) {
        i = i.toLowerCase();
        if ((i === 'and' || i === 'the' || i === 'of' || i === 'in')) {
            res = res + i;
        }
        else {
            res = res + i.charAt(0).toUpperCase() + i.slice(1);
        }
        if (!((arrstr.length - 1) == count)) {
            res = res + " ";
        }
        count++;
    }
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "-") {
            res = res.substring(0, i) + "-" + res.substring(i + 1);
        }
    }

    return res;
}
////////////////////
//Given a string, reverse all the words which have odd length. The even length words are not changed.


console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));
function reverseOdd(str) {
    let arrstr = str.split(" ");
    let count = 0;
    for (let i of arrstr) {
        if (i.length % 2 != 0) {
            arrstr[count] =  i.split("").reverse().join('');
        }
        count++;
    }
    str = arrstr.join(" ");
    return str;
}
/////////////////
//Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
console.log(getMiddle("test"));

function getMiddle(str) {
	if(str.length % 2 == 0){
        return str.substring(((str.length/2)-1),((str.length/2)+1));
    }
    else{
        return str.charAt(str.length/2);
    }
}
///////////////
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
///////////////////
//เขียนฟังก์ชันที่ใช้หมายเลขบัตรเครดิตและแสดงเฉพาะอักขระสี่ตัวสุดท้ายเท่านั้น ส่วนที่เหลือของหมายเลขบัตรจะต้องถูกแทนที่ด้วย************

console.log(cardHide("35123413355523"));

function cardHide(str){
    let res = ""
    for(let i = 0;i<str.length;i++){
        if(i>=str.length-4){
            res+= str.charAt(i);
        }
        else{
            res+="*";
        }
    }
    return res;
}
////////////////////////////
//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
console.log(reverseCase("Happy Birthday"));

function reverseCase(str){
    for(let i =0;i<str.length;i++){
        if(str.charAt(i) == str.charAt(i).toUpperCase()){
            str = str.substr(0,i)+str.charAt(i).toLowerCase()+str.substr(i+1);
        }
        else{
            str = str.substr(0,i)+str.charAt(i).toUpperCase()+str.substr(i+1);
        }
    }
    return str;
}
///////////////////////////
function sortDescending(num) {
    return parseInt(num.toString().split("").sort().reverse().join(""));
}

console.log(sortDescending(1254859723));
//////////////////////////////
function lettersOnly(str) {
	return str.replace(/[^a-zA-Z]/g,"");
}

console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));
///////////////////////////
function AlphabetSoup(str) {
	return str.split("").sort().join("");
}

console.log(AlphabetSoup("hello"));
/////////////////////////////////
function newWord(str) {
	return str.substring(1,str.length);
}


console.log(newWord("apple"));