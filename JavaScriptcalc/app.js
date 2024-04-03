//document.getElementById('result').addEventListener('click', display);
//import
const button = document.getElementById('result');
button.addEventListener('click', function diplay(val){

    let a = document.getElementById('result').value += val;

    return val;
    console.log(val);
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

