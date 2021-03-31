function getMiddle(str) {
	if(str.length % 2 == 0){
        return str.substring(((str.length/2)-1),((str.length/2)+1));
    }
    else{
        return str.charAt(str.length/2);
    }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));