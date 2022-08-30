function createRectangle(){
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    let newRec = new Rectangle(height, width);
  
    document.getElementById('area').innerText = newRec.getArea();
    document.getElementById('perimeter').innerText = newRec.getPerimeter();
  
    let canvas = document.getElementById("DemoCanvas");
    let ctx = canvas.getContext('2d');  
    
    ctx.fillStyle='#fa4b2a';
    ctx.fillRect(0, 0, newRec.width, newRec.height);
    document.getElementById('clear').addEventListener('click', () => {
      ctx.clearRect(0, 0, newRec.width, newRec.height);
      document.getElementById('height').value = "";
      document.getElementById('width').value = "";
      document.getElementById('area').innerText = "";
      document.getElementById('perimeter').innerText = "";
    })
  }