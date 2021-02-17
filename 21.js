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