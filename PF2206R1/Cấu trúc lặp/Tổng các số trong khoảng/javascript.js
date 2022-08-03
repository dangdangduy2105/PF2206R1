function cal(){
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let output = document.getElementById('output');
  let result = 0;
  
  if(num1 > num2){
    for(let i = num2; i <= num1; i++){
      console.log(i);
      result += parseInt(i);
    }
  }else{
    for(let i = num2; i >= num1; i--){
      console.log(i);
      result += parseInt(i);
    }
  }
  output.innerText = result;
  result = 0;
}

function cancel(){
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('output').innerText = '';
}