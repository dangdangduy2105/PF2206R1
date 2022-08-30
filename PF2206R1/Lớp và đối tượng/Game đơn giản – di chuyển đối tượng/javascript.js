function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      if(this.left < 350){
        this.left += 20;
        console.log('ok: ' + this.left);
      }
    }
  
    this.moveLeft = function(){
      if(this.left >= 0){
        this.left -= 20;
        console.log('ok: ' + this.left);
      }
    }
  
    this.moveDown = function(){
        this.top += 20;
        console.log('ok: ' + this.top);
    }
  
    this.moveTop = function(){
      if(this.top > 20){
        this.top -= 20;
        console.log('ok: ' + this.top);
      }
    }
}


  
  // var hero = new Hero('pikachu.png', 0, 0, 200); //  move right left = 0;
  
  // var hero = new Hero('pikachu.png', 0, 0, 200); //  move left left = 350;
  
  var hero = new Hero('pikachu.png', 600, 600, 200); //  move top top = 1000;

//   let hero = new Hero('pikachu.png', 0, 600, 200);//  move down top = 0;

  
// function mLeft(){
//   if(hero.left + hero.size < window.innerWidth){
//     hero.moveLeft();
//   }
//   document.getElementById('game').innerHTML = hero.getHeroElement();
//   setTimeout(mLeft, 500);
// }
// mLeft();

// function mRight(){
//   if(hero.left < window.innerWidth + hero.size){
//     hero.moveRight();
//   }
//   document.getElementById('game').innerHTML = hero.getHeroElement();
//   setTimeout(mRight, 500);
// }
// mRight();


// function mDown(){
//     // if(hero.top < window.innerHeight + hero.size){
//     if(hero.top < 200 + hero.size){
//         hero.moveDown();
//     }
//         document.getElementById('game').innerHTML = hero.getHeroElement();
//         setTimeout(mDown, 500);
//     }
// mDown();


// function mTop(){
//     // if(hero.top < window.innerHeight + hero.size){
//     if(hero.top + hero.size > 0){
//         hero.moveTop();
//     }
//         document.getElementById('game').innerHTML = hero.getHeroElement();
//         setTimeout(mTop, 500);
//     }
// mTop();