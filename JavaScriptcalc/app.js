//document.getElementById('result').addEventListener('click', display);
//import
const button = document.getElementById('result')
button.addEventListener('click', function diplay(){

    document.getElementById('result').value += val

    return val;
});

button.addEventListener('click',function solve() {
    let x = document.getElementById('result').value ;
    let y = eval(x);

    document.getElementById('result').value = y;
    return y;
});

button.addEventListener('click',function clearScreen(){
    document.getElementById('result').value = '';
});

