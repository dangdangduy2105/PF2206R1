class Rat{
    constructor(name, weight, speed, status){
      this.name = name;
      this.weight = weight;
      this.speed = speed;
      this.status = status;
    }
  
    getName(){
      return this.name;
    }
    getWeight(){
      return this.weight;
    }
    getSpeed(){
      return this.speed;
    }
    getStatus(){
      return this.status;
    }
  
    setName(newName){
      this.name = newName;
    }
    setWeight(newWeight){
      this.weight = newWeight;
    }
    setSpeed(newSpeed){
      this.speed = newSpeed;
    }
    setStatus(newStatus){
      this.status = newStatus;
    }
}