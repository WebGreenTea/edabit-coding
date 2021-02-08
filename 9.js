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