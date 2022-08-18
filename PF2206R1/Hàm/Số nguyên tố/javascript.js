function isPrime(number){
    if(number < 2){
      return false;
    }else{
      for(let i = 2; i < number; i++){
        if(number % i == 0){
          return false;
        }else{
          return true;
        }
      }
    }
  }
  
  function check(){
    let input = document.getElementById("input").value;
    if(isPrime(input)){
      document.getElementById("result").innerText = `${input} là số nguyên tố`;
    }else{
      document.getElementById("result").innerText = `${input} không là số nguyên tố`; 
    }
  }