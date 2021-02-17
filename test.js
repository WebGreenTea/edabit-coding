let str = "Happy Birthday";
  let res = str.substr(0, 4)+str.charAt(4).toUpperCase()+str.substr(4+1);
  let res2 = str.substring(0,4)+str.charAt(4).toUpperCase()+str.substring(4+1);
  //document.getElementById("demo").innerHTML = res;
  console.log(res);
  console.log(res2);