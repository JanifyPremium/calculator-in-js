
const button = document.getElementById('result').value;

// Adds an event listener to the button for displaying the number
button.addEventListener('click', function diplay(num){

    let a = button.value += num

    return num;
});

// Adds an event listener to the button for solving the expression
button.addEventListener('click',function solve() {
    let x = button.value ;
    let y = eval(x);

    button.value = y;
    return y;
});

// Adds an event listener to the button for clearing the screen
button.addEventListener('click',function clearScreen(){
    button.value = '';
});

