import analyzer from './analyzer.js';

const userInput = document.querySelector('textarea[name = "user-input"]')
const textinner = document.querySelectorAll('li')

userInput.addEventListener('keyup',()=>{
  //Contar palabras
  textinner[0].innerHTML='Palabras:'+ analyzer.getWordCount(userInput.value)
  textinner[1].innerHTML='Carácteres:'+ analyzer.getCharacterCount(userInput.value)
  textinner[2].innerHTML='Carácteres sin espacios:'+ analyzer.getCharacterCountExcludingSpaces(userInput.value)
  textinner[3].innerHTML='Números:'+ analyzer.getNumberCount(userInput.value)
  textinner[4].innerHTML='Suma Números:'+ analyzer.getNumberSum(userInput.value)
  textinner[5].innerHTML='Promedio Longitud:'+ analyzer.getAverageWordLength(userInput.value)
});




// Botón de limpiar texto
const buttonReset = document.getElementById('reset-button');
buttonReset.addEventListener('click',()=>{
  userInput.value=""
  textinner[0].innerHTML='Palabras: ' 
  textinner[1].innerHTML='Carácteres:' 
  textinner[2].innerHTML='Carácteres sin espacios::' 
  textinner[3].innerHTML='Números:' 
  textinner[4].innerHTML='Suma Números:'
  textinner[5].innerHTML='Promedio Longitud:' 
});




//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`