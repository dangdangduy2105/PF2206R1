var n = parseInt(prompt('Nhập số nguyên dương'));
var fbnci = [0, 1];
var i = 1;
while(i < n) {
  fbnci.push(fbnci[i] + fbnci[i-1]);
  i++;
}

document.write(fbnci);
// f1 = 1;
// f2 = 1;
// f3 = f1+f2; //1+1 = 2;
// f4 = f3+f2; //2+1 = 3;
// f5 = f4+f3; //3+2 = 5;