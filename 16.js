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

    /*arrstr = res.split("-");
    res = "";
    count = 0;
    for (let i of arrstr) {*/

}