import validator from './validator.js';

//BOTÓN
const valid = document.getElementById("boton"); //variable para el botón
valid.addEventListener("click", validar , false);//evento del botón

console.log(validator);

//BOTÓN PARA OCULTAR NUMERO DE TARJETA

const numeroEnmascarado = document.getElementById ("botonEnmascarar");
numeroEnmascarado.addEventListener("click", enmascarar,false);
//numeroEnmascarado.addEventListener("keyup",enmascarar);

//FUNCIÓN PARA OCULTAR NUMEROS DE LA TARJETA

function enmascarar() {  

  let numeroDelInput= document.getElementById("inputNumero");
  let numeroVisible = numeroDelInput.value.split("");
  let hideNum = [];
  
  for (let i = 0; i < numeroVisible.length; i++) {
    
    if (i < (numeroVisible.length - 4)) {
      hideNum.push("*"); //enmascara los digitos de la cadena hasta la posición - 4 
    } else {
      hideNum.push(numeroVisible[i]);//muestra los últimos 4 digitos de la tarjeta
    }

  }
  
  numeroDelInput.value = hideNum.join(""); //muestra el numero enmascarado en el input

  return hideNum.join("");//termina la función
}

//FUNCIÓN PARA VALIDAR SI EL INPUT ESTÁ VACIO

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

//SELECT MES
for(let i = 1; i <=12; i++){
  let opcion = document.createElement('option');
  opcion.value = 1;
  opcion.innerText = i;
  selectMes.appendChild(opcion);

}

//SELECT AÑO
const yearActual = new Date().getFullYear();
for(let i= yearActual; i <= yearActual + 8; i++){
  let opcion = document.createElement('option');
  opcion.value = 1;
  opcion.innerText = i;
  selectyear.appendChild(opcion);

}

//5257619423160064
