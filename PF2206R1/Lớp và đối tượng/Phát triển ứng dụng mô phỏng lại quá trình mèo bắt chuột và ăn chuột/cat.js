class Cat{
    constructor(name, weight, maxSpeed){
      this.name = name;
      this.weight = weight;
      this.maxSpeed = maxSpeed;
    }
  
    getName(){
      return this.name;
    }
    getWeight(){
      return this.weight;
    }
    getMaxSpeed(){
      return this.maxSpeed;
    }
  
    setName(newName){
      this.name = newName;
    }
    
    setWeight(newWeight){
      this.weight = newWeight;
    }
    setMaxSpeed(newMaxSpeed){
      this.maxSpeed = newMaxSpeed;
    }
    
    catchRat(rat){
      if(this.maxSpeed > rat.speed){
        return true;
      }
      return false;
    }
    
    eatRat(rat){
      if(this.catchRat(rat) && rat.status){
        let newWeight = this.weight + rat.weight;
        this.setWeight(newWeight);
        return true;
      }
      return false;
    }
}