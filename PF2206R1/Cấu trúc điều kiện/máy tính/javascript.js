function btnClick(e){
    document.getElementById('sum').value = '+';
    document.getElementById('sub').value = '-';
    document.getElementById('mul').value = 'x';
    document.getElementById('div').value = '/';

    let screen = document.getElementById('screen');
    let btn_value = e.value;
    let result = 0; 
    let x = screen.value;
    screen.value += btn_value;
    if(btn_value != 'total'){
        if(btn_value == '+'){
            input1 = parseInt( x.substring(0, x.length));
            screen.value = '';
            x = '';
            operation = '+';
        }else if(btn_value == '-'){
            input1 = parseInt( x.substring(0, x.length));
            screen.value = '';
            x = '';
            operation = '-';
        }else if(btn_value == 'x'){
            input1 = parseInt( x.substring(0, x.length));
            screen.value = '';
            x = '';
            operation = '*';
        }else if(btn_value == '/'){
            input1 = parseInt( x.substring(0, x.length));
            screen.value = '';
            x = '';
            operation = '/';
        }
    }else if(btn_value == 'total'){
        input2 = parseInt(x.substring(0, x.length));
        switch(operation){
            case '+':
                result = input1 + input2;
                screen.value = result;
                input1 = result;
                break;
            case '-':
                result = input1 - input2;
                screen.value = result;
                input1 = result;
                break;
            case '*':
                result = input1 * input2;
                screen.value = result;
                input1 = result;
                break;
            case '/':
                result = input1 / input2;
                screen.value = result;
                input1 = result;
                break;
        }
    }
}

function btn_clear(){
    document.getElementById('screen').value = '';
}