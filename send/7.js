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

console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));
console.log(correctTitle("sansa stark, lady of winterfell."));
console.log(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."));