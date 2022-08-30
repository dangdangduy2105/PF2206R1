class Product{
    name;
    price;
    number;
    img;
    
    constructor(name, price, number) {
        this.name = name;
        this.price = price;
        this.number = number;
      }
    getAmount(){
      return this.price * this.number;
    }
    
  }