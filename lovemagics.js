var display = document.getElementById("display");

function getSelections(input){
    display.value += input;
}

function getClearsbundles(){
    display.value = "";
}

function getDetailsDatas(){
    try {
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
    
}