function cal(){
  let num = parseInt(document.getElementById('num').value);
  let output = document.getElementById('output');
  let count = 0;
  let result = [];

  
  for(let i = 0; i < num; i++){ 
    if(num % i != 0){
      result.push(i);
    }
  }  
  output.innerText = result;
}

function cancel(){
  document.getElementById('num').value = '';
  document.getElementById('output').innerText = '';
}