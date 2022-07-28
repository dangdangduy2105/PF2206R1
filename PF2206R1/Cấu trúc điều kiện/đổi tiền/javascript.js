function convert(){
    let amount = parseInt(document.getElementById('amount').value);
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let total = 0.0;

    if(amount < 1.0 || from == to){
        alert('Kiểm tra lại!!');
    }else if(from == 'vnd' && to == 'usd'){
        total = amount * 0.000043;
    }else if(from == 'vnd' && to == 'eur'){
        total = amount * 0.000042;
    }else if(from == 'usd' && to == 'vnd'){
        total = amount * 23363.00;
    }else if(from == 'usd' && to == 'eur'){
        total = amount * 0.98;
    }else if(from == 'eur' && to == 'vnd'){
        total = amount * 23830.26;
    }else if(from == 'eur' && to == 'usd'){
        total = amount * 1.02;
    }
    
    document.getElementById('result').innerText = 'Result: ' + total + to.toUpperCase();
}