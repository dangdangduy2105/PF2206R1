// bài tập 4
let inputWidth;
let inputHeight;

inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;
document.write("The area is: " + area);

let diem = prompt('Nhập điểm');
if(diem >=0 && diem <= 10){
    if(diem < 5){
        document.write("không đạt");
    }
    else if(diem < 7){
        document.write("đạt");
    }
    else{
        document.write("đạt");
    }
}else{
    document.write('Nhập lại điểm')
}