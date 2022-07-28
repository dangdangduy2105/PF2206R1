function check(){
    let namduonglich = document.getElementById('namDl').value;
    let intCan = parseInt(namduonglich) % 10;
    let intChi = parseInt(namduonglich) % 12;

    let can = '';
    let chi = '';
    if(namduonglich < 0){
        alert('Nhập lại!!')
    }else{
        switch(intCan){
            case 0:
                can = 'Canh';
                break;
            case 1:
                can = 'Tân';
                break;
            case 2:
                can = 'Nhâm';
                break;
            case 3:
                can = 'Quý';
                break;
            case 4:
                can = 'Giáp';
                break;
            case 5:
                can = 'Ất';
                break;
            case 6:
                can = 'Bính';
                break;
            case 7:
                can = 'Đinh';
                break;
            case 8:
                can = 'Mậu';
                break;
            case 9:
                can = 'Kỷ';
                break;
        }

        switch(intChi){
            case 0:
                chi = 'Thân';
                break;
            case 1:
                chi = 'Dậu';
                break;
            case 2:
                chi = 'Tuất';
                break;
            case 3:
                chi = 'Hợi';
                break;
            case 4:
                chi = 'Tý';
                break;
            case 5:
                chi = 'Sửu';
                break;
            case 6:
                chi = 'Dần';
                break;
            case 7:
                chi = 'Mẹo';
                break;
            case 8:
                chi = 'Thìn';
                break;
            case 9:
                chi = 'Tỵ';
                break;
            case 10:
                chi = 'Ngọ';
                break;
            case 11:
                chi = 'Mùi';
                break;
        }
    }
    
    document.getElementById('result').innerText = can + chi;
}