let b = document.getElementById("carogame");

let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array(".",".",".",".",".");
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

// data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    // data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data;
}



// let b = document.getElementById("carogame");

// let board = [];
// let data = "";
// for (let i = 0; i < 5; i++) {
//     board[i] = new Array(".",".",".",".",".");
// }

// for (let i = 0; i < 5; i++) {
//     data += "<br/>";
//     for (let j = 0; j < 5; j++) {
//         data += board[i][j] + "&nbsp;&nbsp;";
//     }
// }

// data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
// b.innerHTML = data;

// function changeValue() {
//   let positionX = prompt("X: ");
//   let positionY = prompt("Y: ");
//   data = "";
//   let count = 0;
//   board[positionX][positionY] = "x";
//   for (let i = 0; i < 5; i++) {
//       data += "<br/>";
//       for (let j = 0; j < 5; j++) {
//           data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
//         if(board[i][j] == "x"){
//             count++;
//         }
//       }
//   }
//   console.log(count);
//   data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
//   b.innerHTML = "<hr/>" + data;
// }

// let a = [[1, 4, 5, 8, 5, 5],//0-0, 0-1, 0-2, 0-3, 0-4, 0-5
//          [5, 7, 8, 9, 5, 8],//1-0, 1-1, 1-2, 1-3, 1-4, 1-5
//          [6, 8, 3, 9, 0, 9],//2-0, 2-1, 2-2, 2-3, 2-4, 2-5
//          [6, 5, 1, 5, 9, 2],//3-0, 3-1, 3-2, 3-3, 3-4, 3-5
//          [1, 2, 4, 6, 7, 9],//4-0, 4-1, 4-2, 4-3, 4-4, 4-5
//         ];
// // console.log(a[0][0]);
// let b = 5;
// let count = 1;

// function check_duongcheochinh(){//00-11-22-33-44
//   let sum = 0;
//     for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < a.length+1; j++){
//       if(i == j){
//         sum += a[i][j];
//         // console.log(a[i][j])
//       }
//     }
//   }
//   return sum;
// }
// function check_duongcheophu_1(){//10-21-32-43
//   let sum = 0;
//     for(let i = 0; i < a.length; i++){
//       console.log(a[i][a.length-i])
//   }
//   return sum;
// }

// function check_duongcheophu_2(){//10-21-32-43
//   let sum = 0;
//     for(let i = 0; i <= a.length; i++){
//       for(let j = 0; j <= a.length; j++){
//         if(i > j){
//           console.log(a[i][i])
//       // }else if(i < j){
//       //   console.log(a[i][i])
//         }
//       }
//     }  
//     return sum;
// }

// function check_duongcheophu_3(){//10-21-32-43
//   let sum = 0;
//     for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < a.length+1; j++){
//       if(i + j < a.length){
//         console.log(a[i][i])
//       // }else if(i + j > a.length){
//       //   console.log(a[i][i])
//       }
//     }
//   }
//   return sum;
// }

// // i - j = n -> a[i][n-j]

// // console.log(check_duongcheochinh());
// // console.log(check_duongcheophu_1());
// console.log(check_duongcheophu_2());
// // console.log(check_duongcheophu_3());