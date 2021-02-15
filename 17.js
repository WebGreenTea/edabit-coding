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