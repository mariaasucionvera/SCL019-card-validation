import validator from './validator.js';

//BOTÓN
const valid = document.getElementById("boton"); //variable para el botón
valid.addEventListener("click", validar , false);//evento del botón

console.log(validator);

//INPUT EN ARRAY
let numeroDelInput= document.getElementById("inputNumero");
let numeroArray= [];//numeroDelInput.value.split("");
console.log(numeroArray);

//let numeroDelInputSlice = numeroDelInput.slice();


//FUNCIÓN PARA OCULTAR NUMEROS DE LA TARJETA

let numeroEnmascarado= document.getElementById ("inputNumero");
numeroEnmascarado.addEventListener("keyup",enmascarar);


function enmascarar() {      //función para ocultar los primeros digitos de la tarjeta

  let numeroVisible = numeroDelInput.value.split("");
  console.log(numeroVisible);
  let hideNum = [];
  
  for (let i = 0; i < numeroVisible.length; i++) {
    
    if (i < (numeroVisible.length - 4)) {
      hideNum.push("*"); //enmascara los digitos de la cadena hasta la posición - 4 
    } else {
      hideNum.push(numeroVisible[i]);//muestra los últimos 4 digitos de la tarjeta
    }

  }
  //console.log(hideNum.join(""));

  numeroEnmascarado.value = hideNum.join(""); //muestra el numero enmascarado en el input

  return hideNum.join("");//termina la función
}

//FUNCIÓN PARA VALIDAR SI EL IPUT ESTÁ VACIO

function validar() {       

  let Input = document.getElementById("inputNumero").value;

  console.log(Input);

  if (Input.length == 0) {
    alert('Rellene el campo número de tarjeta');
    return false;
  }

  numberValidation();

}

//FUNCIÓN PARA VALIDAR LA TARJETA 

function numberValidation() {

  let creditCardNumber = document.getElementById("inputNumero").value;


  let validacion = validator.isValid(creditCardNumber);

  if (validacion === true) {
    alert("SU TARJETA ES VÁLIDA");
  } else {
    alert("SU TARJETA NO ES VÁLIDA");
  }
}




/*console.log("holis");*/
/*function validarNumero() {
  let numeroTarjeta = document.getElementById("inputNumero").value;
  let ntar = numeroTarjeta.split('');  
  let ntarReverse = ntar.reverse();

  console.log(ntar);
}*/

