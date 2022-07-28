function getTotal(){
    let math = document.getElementById('math').value;
    let literature = document.getElementById('literature').value;
    let english = document.getElementById('english').value;
    let areaPoint = 0;
    let area = document.getElementById('area').value;
    switch(area) {
        case 'kv1':
            areaPoint = 0.75;
            break;
        case 'kv2':
            areaPoint = 0.5;
            break;
        case 'kv2-nt':
            areaPoint = 0.25;        
            break;
        case 'kv3':
            areaPoint = 0;        
            break;
    }
    let total = parseFloat(math) + parseFloat(literature) + parseFloat(english) + areaPoint;
    document.getElementById('result').innerText = 'Tổng điểm ĐH khối D của bạn là:' + total;
}

// reset
function resetForm(){
    document.getElementById('math').value = '';
    document.getElementById('literature').value = '';
    document.getElementById('english').value = '';
    document.getElementById('area').value = '';
    document.getElementById('result').innerText = '';
}