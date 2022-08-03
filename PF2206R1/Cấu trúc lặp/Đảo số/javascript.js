let inputNumber = 987654321;
let st = 0;
let result = 0;

do{
  lastDigit = parseInt(inputNumber%10);
  result = parseInt(result*10 + lastDigit);
  inputNumber = parseInt(inputNumber/10);
}while(inputNumber > 0)
document.write(result)