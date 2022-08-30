// function checked(){
//   let ratName = document.getElementById('ratName').value;
//   let ratWeight = +document.getElementById('ratWeight').value;
//   let speed = +document.getElementById('speed').value;
//   let status;
//   let checkStatus = document.getElementsByName('status');

//   for (let i of checkStatus) {
//     if (i.checked) {
//       if(i.value == 'alive'){
//         status = true;
//       }else{
//         status = false;
//       }
//     }
//   }
  
//   let catName = document.getElementById('catName').value;
//   let catWeight = +document.getElementById('catWeight').value;
//   let maxSpeed = +document.getElementById('maxSpeed').value;

//   if(ratName.length == 0){
//     document.getElementsByName('error').innerHTML = `<p style="color: red">Missing Something?</p>`
//     return false;
//   }

//   let littleRat = new Rat(ratName, ratWeight, speed, status);
//   let crazyCat = new Cat(catName, catWeight, maxSpeed);
  
//   return littleRat, crazyCat;
// }//check if is none function


function ourCatnRat() {
    let ratName = document.getElementById('ratName').value;
    let ratWeight = +document.getElementById('ratWeight').value;
    let speed = +document.getElementById('speed').value;
    let status;
    let checkStatus = document.getElementsByName('status');

    for (let i of checkStatus) {
        if (i.checked) {
        if(i.value == 'alive'){
            status = true;
        }else{
            status = false;
        }
        }
    }

    let catName = document.getElementById('catName').value;
    let catWeight = +document.getElementById('catWeight').value;
    let maxSpeed = +document.getElementById('maxSpeed').value;

    let littleRat = new Rat(ratName, ratWeight, speed, status);
    let crazyCat = new Cat(catName, catWeight, maxSpeed);

    console.log(littleRat);
    console.log(crazyCat);

    document.getElementById('startCatching').addEventListener('click', () =>{
        if(crazyCat.catchRat(littleRat)){
        document.getElementById('catchingResult').innerText = 
        crazyCat.name + " catched " + littleRat.name + " successfully";
        }else{
        document.getElementById('catchingResult').innerText = 
        crazyCat.name + " had failed to catch " + littleRat.name;
        }
    })

    document.getElementById('startEating').addEventListener('click', () =>{
        if(crazyCat.eatRat(littleRat)){
        document.getElementById('catchingResult').innerText = 
        crazyCat.name + " ate " + littleRat.name;
        }else{
        document.getElementById('catchingResult').innerText = 
        crazyCat.name + " won eat " + littleRat.name;
        }
    })
}