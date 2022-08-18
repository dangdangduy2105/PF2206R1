let products = ["Sony Xperia",     //0
          "Samsung Galaxy",      //1
          "Nokia 6",             //2
          "Xiaomi Redmi Note 4", //3 
          "Apple iPhone 6S",     //4
          "Xiaomi Mi 5s Plus",   //5
          "Apple iPhone 8 Plus", //6
          "Fujitsu F-04E",       //7
          "Oppo A71"];           //8
function createTable(){
  let content = "<table style='border:1px solid;'>";
    for(let i = 1; i <= products.length; i++){
      content += '<tr>';
      content += '<td style="border:1px solid; padding: 10px">';
      content += i;
      content += '</td>';
      content += '<td style="border:1px solid; padding: 10px">';
      content += products[i-1];
      content += '</td>';
      content += '<td style="border:1px solid; padding: 10px">';
      content += '<button onclick="editProduct(';
      content += i-1;
      content += ')">Edit</button>'
      content += '</td>';
      content += '<td style="border:1px solid; padding: 10px">';
      content += '<button onclick="deleteProduct(';
      content += i-1;
      content += ')">Delete</button>'
      content += '</td>';
      content += '</tr>';
    }
  content += '</table>';
  document.getElementById("content").innerHTML = content;
  return products;
}
function deleteProduct(value){
  const filteredArray = products.filter(a => a !== products[value]);
  products = filteredArray;
  createTable();
}

function editProduct(value){
  let name = prompt(`Sửa tên cho sản phẩm ${products[value]}`);
  for(let i = 0; i < products.length; i++){
    if(name != products[i]){
      products[value] = name;
      console.log(products[value]);
      createTable();
    }else{
      alert("Trùng tên sản phẩm");
      break;
    }
  }
}

function addProduct(){
  let name = document.getElementById("proName").value;
  products.push(name);
  createTable();
}