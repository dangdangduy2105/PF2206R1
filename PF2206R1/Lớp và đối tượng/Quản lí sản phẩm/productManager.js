let listProduct = [
    new Product("Aster Mix Gold", 3, 335000),
    new Product("Vertu Signature 5G", 20, 128000),
    new Product("Galaxy S22 ultra", 20, 32000),
    new Product("Rog 6", 23, 40000),
    new Product("Nokia 1280", 2, 150),
]
  
//hiện thị danh sách sản phẩm
function showAllProduct(){
    let content = "";
    for(let i = 0; i < listProduct.length; i++){
        content += `<tr>
        <td>${listProduct[i].name}</td>
        <td style="text-align: right;">${listProduct[i].price}</td>
        <td style="text-align: right;">${listProduct[i].number}</td>
        <td style="text-align: right;">${listProduct[i].getAmount()}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>`
    };
    document.getElementById("listProduct").innerHTML = content;
}
showAllProduct();
  
  
function createNewProduct(){
    let name = document.getElementById("name").value;
    let price = +document.getElementById("price").value;
    let number = +document.getElementById("number").value;
    let newP = new Product(name, price, number);
    listProduct.push(newP);
    showAllProduct();
}