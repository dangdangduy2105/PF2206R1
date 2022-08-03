for(let i = 1; i < 6; i++){
  for(let j = 0; j < i; j++){
    document.write('*');
  }
  document.write('</br>');
}
//i1 -> j0 < i1 ->            *
//i2 -> j0-j1 < i2 ->         **
//i3 -> j0-j1-j2 < i3 ->      ***

document.write('</br>');

for(let e = 0; e < 5; e++){
  for(let f = 5; f > e; f--){
    document.write('*');
  }
  document.write('</br>');
}
//e0 -> f5-f4-f3-f2-f1 > e0 -> *****
//e1 -> f5-f4-f3-f2 > e0    -> ****

document.write('</br>');

for(let m = 1; m < 6; m++){
  for(let n = 5; n > m; n--){
    document.write('&ensp;');
  }
  for(let l = 0; l < m; l++){
    document.write('*');
  }
  document.write('</br>');
}

//m1 -> n5-n4-n3-n2 > m1 =>  ---- + l0 < m1 =>     *
//m2 -> n5-n4-n3    > m2 =>  ---  + l1 < m2 =>    **
//m3 -> n5-n4       > m3 =>  --   + l2 < m2 =>   ***
//m4 -> n5          > m4 =>  -    + l3 < m2 =>  ****
//m5 -> n5          > m5 =>       + l4 < m2 => *****

document.write('</br>');

for(let o = 0; o < 5; o++){
  for(let q = 0; q < o; q++){
    document.write('&ensp;')
  }
  for(let p = 5; p > o; p--){
    document.write('*');
  }
  document.write('</br>');
}
//o0 -> q0          -------        + p5 > o0 => *****
//o1 -> q0          < o1 =>  -     + p0 < o1 =>  ****
//o2 -> q0-q1       < o2 =>  --    + p1 < o2 =>   ***
//o3 -> q0-q1-q2    < o3 =>  ---   + p2 < o2 =>    **
//o4 -> q0-q1-q2-q3 < o4 =>  ----  + p3 < o2 =>     *
