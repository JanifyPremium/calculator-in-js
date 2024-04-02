function diplay(val){

    document.getElementById('result').value += val

    return val;
}

function solve() {
    let x = document.getElementById('result').addEventListener ("click", ) ;
    let y = eval(x);

    document.getElementById('result').value = y;
    return y;
}

function clearScreen(){
    document.getElementById('result').value = '';
}

/*let currentDisplay = "0"; 
let resultDisplay = false; 

function display(value) {
    if (currentDisplay === "0" || resultDisplay) {
      currentDisplay = value;
    } else {
      currentDisplay += value;
    }
  
    resultDisplay = false;
  
    // Update the calculator display to show the new content
    updateDisplay();
  }
  // Function to update the calculator display with the current content
function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
  }*/
