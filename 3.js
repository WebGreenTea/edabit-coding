//Create a function that takes two dates and returns the number of days between the first and second date.

var date1 = new Date("June 14, 2019"); 
var date2 = new Date("June 20, 2019"); 

let x = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 *24);
console.log(x);