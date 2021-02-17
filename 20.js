//เขียนฟังก์ชันที่ใช้หมายเลขบัตรเครดิตและแสดงเฉพาะอักขระสี่ตัวสุดท้ายเท่านั้น ส่วนที่เหลือของหมายเลขบัตรจะต้องถูกแทนที่ด้วย************

console.log(cardHide("35123413355523"));

function cardHide(str){
    let res = ""
    for(let i = 0;i<str.length;i++){
        if(i>=str.length-4){
            res+= str.charAt(i);
        }
        else{
            res+="*";
        }
    }
    return res;
}