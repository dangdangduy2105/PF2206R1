function checked(){
    let inPut = document.getElementById('inPut');
    let message = "Nice try, You can't do anything to change this!!";
    let arr_mess = message.split("");
    let text = "";
    for(let i = 1; i <= inPut.value.length; i++){ 
      text = arr_mess.slice(0, i).join("");
      if(inPut.value.length == message.length+1){
        inPut.value = "";
        text = "";
      }
    }
    inPut.value = text;
    text = "";
  }