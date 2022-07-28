let h = prompt('Nhập chiều cao (m)');
let w = prompt('Nhập cân nặng (kg)');

let bmi = parseFloat(w/(h*h));

if(w < 0 || h < 0){
    document.write('Nhập sai');
}else if(bmi < 16){
    document.write('Gầy độ III')
}else if(bmi < 17){
    document.write('Gầy độ II')
}else if(bmi < 18.5){
    document.write('Gầy độ I')
}else if(bmi < 25){
    document.write('Bình thường')
}else if(bmi < 30){
    document.write('Thừa cân')
}else if(bmi < 35){
    document.write('Béo phì cấp độ I')
}else if(bmi < 40){
    document.write('Béo phì cấp độ II')
}else{
    document.write('Béo phì cấp độ IIII')
}