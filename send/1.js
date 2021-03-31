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
console.log(getItemsAt([2, 4, 6, 8, 10], "odd"));
console.log(getItemsAt(["E", "D", "A", "B", "I", "T"], "even"));
console.log(getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even"));
console.log(getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even"));