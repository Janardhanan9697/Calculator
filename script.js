const data = document.getElementById('display')
console.log(data);




function itemsDisplay(value){
    data.value += value;
}

function clearDisplay(){
    data.value = ''
}


function calculate(){
    try{
        data.value = eval(data.value);
    }catch{
        alert('This is not a valid operation');
    }
}