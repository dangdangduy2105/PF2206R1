class Temperature{
    constructor(celsius) {
        this.celsius = parseFloat(celsius);
      }
    getF(){
      return this.celsius * 1.8 + 32;
    }
  
    getK(){
      return this.celsius + 273.15;
    }
  }
  
  function convertC(){
    let celsius = document.getElementById('celsius').value;
  
    let temp = new Temperature(celsius);
  
    document.getElementById('convertToF').innerText = temp.getF();
    document.getElementById('convertToK').innerText = temp.getK();
  }