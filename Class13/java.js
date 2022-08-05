const h1 = document.querySelector('h1');


const input1 = document.querySelector('#calculo1');

const input2 = document.querySelector('#calculo2');

const btn = document.querySelector('#btnCalcular');

const pResult = document.querySelector('#result')

const form = document.querySelector('#formulario')

btn.addEventListener('click', sumarInputValues)

function sumarInputValues() {
    // console.log({event})
    // event.preventDefault()
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado de la suma es: " + suma; 
}