const h1 = document.querySelector('h1');


const input1 = document.querySelector('#calculo1');

const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');

const pResult = document.querySelector('#result')

function btnOnClick(){
    let suma = (parseInt(input1.value)  + parseInt(input2.value))

    pResult.innerText = "Resultado de la suma es: " + suma;
}