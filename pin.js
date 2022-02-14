function getPin(){
    let pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if(pinString.length == 4){
        return pin ;
    }
    else{
        //console.log('got 3 digit and calling again',pin);
        return getPin();
    }
}

function generatePin(){
   pin = getPin();
    document.getElementById('display').value = pin;
}

//for calculator
document.getElementById('key-pad').addEventListener('click', function(event){
  let number = event.target.innerText;
  let calcInput = document.getElementById('typed-numbers');
  if(isNaN(number)){
      if(number=='C'){
          calcInput.value = '';
      }
  }
  else{
      let previousNumber = calcInput.value;
      let newNumber = previousNumber + number;
      calcInput.value = newNumber;
  }
})

//for pin varify
function varifyPin(){
    let pin = document.getElementById('display').value;
    let typedNumbers = document.getElementById('typed-numbers').value
    let successMsg = document.getElementById('notify-success');
    let errorMsg = document.getElementById('notify-fail');
    if(pin == typedNumbers){
        successMsg.style.display = "block";
        errorMsg.style.display = 'none';
    }
    else{    
        errorMsg.style.display = 'block';
        successMsg.style.display = "none";
    }
}