function cal(){
    let month = document.getElementById('month').value;
    let days = '';
    if(month < 1 || month > 12 ){
        alert('Nhập lại!!');
    }else{
        switch(parseInt(month)) {
            case 1:
                days = '31 ngày';
                break;
            case 2:
                days = '28 hoặc 29 ngày';
                break;
            case 3:
                days = '31 ngày';
                break;
            case 4:
                days = '30 ngày';
                break;
            case 5:
                days = '31 ngày';
                break;
            case 6:
                days = '30 ngày';
                break;
            case 7:
                days = '31 ngày';
                break;
            case 8:
                days = '31 ngày';
                break;
            case 9:
                days = '30 ngày';
                break;
            case 10:
                days = '31 ngày';
                break;
            case 11:
                days = '30 ngày';
                break;
            case 12:
                days = '31 ngày';
                break;                            
        }   
    }
    
    document.getElementById('result').innerText = 'Tháng ' + month + ' có ' + days;
}