let content = "<table style='border:1px solid;'>";
for(let i = 1; i < 11; i++){
  content += '<tr>';
  for(let j = 2;j < 10; j++){
    content += '<td style="border:1px solid; padding: 10px">';
    content += j + ' x ' + i + ' = ' + i*j;
    content += '</td>';
  }
  content += '</tr>';
}
content += '</table>';
document.getElementById("content").innerHTML = content;