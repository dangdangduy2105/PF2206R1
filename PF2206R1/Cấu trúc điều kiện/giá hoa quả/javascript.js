function getPrice(){
    let name = document.getElementById('fruitName').value;
    // alert(name)
    let price = document.getElementById('price');
    const fruits = ['ổi', 'dưa hấu', 'táo', 'xoài', 'cam', 'chôm chôm', 'măng cụt'];
    if(fruits.includes(name.toLowerCase()) == false){
        alert('Nhập lại!!');
    }else{
        switch(name.toLowerCase()) {
            case 'ổi':
                price.innerText = '20000 VNĐ/kg';
                break;
            case 'dưa hấu':
                price.innerText = '20000 VNĐ/kg';
                break;
            case 'táo':
                price.innerText = '30000 VNĐ/kg';
                break;
            case 'xoài':
                price.innerText = '30000 VNĐ/kg';
                break;
            case 'cam':
                price.innerText = '40000 VNĐ/kg';
                break;
            case 'chôm chôm':
                price.innerText = '40000 VNĐ/kg';
                break;
            case 'măng cụt':
                price.innerText = '50000 VNĐ/kg';
                break;
          }
    }
}

// reset
function resetForm(){
    document.getElementById('fruitName').value = '';
    document.getElementById('price').innerText = '';
}