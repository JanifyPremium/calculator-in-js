document.getElementById('result').addEventListener('click', display);

function diplay(val){

    document.getElementById('result').value += val

    return val;
}

function solve() {
    let x = document.getElementById('result').value ;
    let y = eval(x);

    document.getElementById('result').value = y;
    return y;
}

function clearScreen(){
    document.getElementById('result').value = '';
}


/* 
// Use insert() function to insert the number in textview.  
function insert(num)   
{  
documentdocument.form1.textview.value = document.form1.textview.value + num;  
}  
  
// Use equal() function to return the result based on passed values.  
function equal()  
{  
var exp = document.form1.textview.value;  
if(exp)  
{  
document.form1.textview.value = eval(exp)  
}  
}  
  
/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */  
/*function backspace()  
{  */
/*var exp = document.form1.textview.value;  
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
//}  
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
