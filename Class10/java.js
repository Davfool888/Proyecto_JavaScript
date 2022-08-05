const h1 = document.querySelector('h1');
const pa = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');

const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    pa,
    parrafito,
    pid,
    input,
});


h1.innerHTML = "holaaaa"
h1.innerText ="hellooo"

console.log(pid.getAttribute('id'))

parrafito.setAttribute("class", "PARRAFO")

parrafito.classList.add("rojo")

parrafito.classList.remove("PARRAFO")





const img = document.createElement("img"); 
img.setAttribute("src", "https://static.platzi.com/media/avatars/avatars/bleiks_b4177e70-bb0e-43cb-8862-d283f2fd6aa9.jpg")
console.log(img)


pid.innerHTML = ""
pid.append(img);