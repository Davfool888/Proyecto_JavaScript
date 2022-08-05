// //lOS ARRAYS SON UN COJUNTO DE ELEMENTOS 

// //Diferencia entre Arrays y Objetos: Los objetos son iguales a los arrays pero cada objeto tiene un nombre clave 



// //Array
// let array = [1 , 2 , 3 , 4 , 5 , 6]

// //Object

// let object = {
//     ob1: 'Juan',
//     ob2:  "David",
//     ob3: "Santiago", 
//     ob4: 2
// };

// console.log(object)




// function Imprimir(arr) {
//     console.log(arr[6])
// }

// Imprimir(arr = [1 , 2 , 3 , 4 , 5 , 6])


let contador = -1;

let hola

function imprimir2(arr) {

    while(contador >= -1){
   
        contador++;
    
        if( contador == hola  ){
            break;
          
        }
        
        console.log(arr[contador])
        hola = parseInt(arr.length);
    }
    
}

imprimir2(arr = [1,2,3,4,5,6,7,8,9,10])




