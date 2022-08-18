function footToMeter(foot){
    return 0.305 * foot;
}

function meterToFoot(meter){
    return 3.279 * meter;
}

function check(a){
    let input = document.getElementById("input").value;
    if(a == 1){
        document.getElementById("result").innerText = `${input} Meter =  ${meterToFoot(input)} Foot`;
    }else{
        document.getElementById("result").innerText = `${input} Foot =  ${footToMeter(input)} Meter`;
    }
}