let number = prompt('Nhập số muốn đoán trong khoảng');
let i = 0;
let num1 = Math.floor(Math.random() * number);
correct = num1;
let guess = +prompt('Nhập số muốn đoán');
do{
  if(i < 3){
    guess = +prompt('Nhập số muốn đoán');
  }else{ 
    document.write('Bạn đoán sai!!')
  }
  i++;
}while(i < 3);
document.write('Bạn đoán đúng!!')