function isPalindrome_1(str){
  let input = str.split("");
  let i = 0;
  let mid = input.length/2;
  let count = 0;
  do{
    if(input[i] == input[input.length-i-1]){
      count++;
    }else{
      return false;
    }
    i++;
  }while((input.length-i-1) > mid)
  if(count == parseInt(mid)){
    return true;
  }
}
  
function isPalindrome(str){
  let input = str.split("");
  let i = 0;
  let mid = input.length/2;
  do{
    if(input[i] != input[input.length-i-1]){
      return false;
    }
    i++;
  }while((input.length-i-1) > mid);
    return true;
}

function check(a){
  let str = document.getElementById('input').value;
  let check;
  if(a == 1){
    check = isPalindrome(str);
  }else{
    check = isPalindrome_1(str);
  }

  if(check){
    document.getElementById('result').innerText = `${str} là chuỗi đối xứng`;
  }else{
    document.getElementById('result').innerText = `${str} không là chuỗi đối xứng đối xứng`;
  }
}