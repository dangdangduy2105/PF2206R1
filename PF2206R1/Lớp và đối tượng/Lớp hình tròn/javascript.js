class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getRadius(){
      return this.radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
  };
  
  
  function createdCircle(){
    let input = document.getElementById("radius").value;
    let circle = new Circle(input);
    let radius = circle.getRadius();
    let area = circle.getArea();
    
    document.getElementById("result").innerText = "radius: " + radius + "; area: " + area;
  }