function reverse(){
  let inputNumber = document.getElementById('number').value;
  let lastDigit = 0;
  let result = 0;
  let output = document.getElementById('output')
  
  do{
    lastDigit = parseInt(inputNumber%10);
    result = parseInt(result*10 + lastDigit);
    inputNumber = parseInt(inputNumber/10);
  }while(inputNumber > 0)
  output.innerText = result;
}

function cancel(){
  document.getElementById('number').value = '';
  document.getElementById('output').innerText = '';
}