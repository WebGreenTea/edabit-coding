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