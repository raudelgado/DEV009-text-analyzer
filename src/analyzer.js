

const analyzer = {  
  getWordCount: (text) => {
    const deleteSpace = text.trim(); //con el trim pude quitar los espacios de la oración
    const resultWord = deleteSpace.split(' '); //agregué una constante más en la que le asigne la función de trim para que así no me contara los espacios al inicio
    return resultWord.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length; //la función de length me devuelve la longitud y lo llamo con un return 
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const reemplazar = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "")
    const conReemplazo = reemplazar.length
    return conReemplazo
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    const lengthWord = text.split(' ');
    let sum = 0;
    for(let i=0; i<(lengthWord.length); i++){
      sum = sum+lengthWord[i].length
     
    } 
    return Math.round((sum / lengthWord.length)*100)/100
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const lengthword = text.trim().split(' ');
    // console.log(lengthword); Me estaba contando el espacio como un número y decidí agregar un trim 
    let acumulador = 0;
    for(let i=0; i<(lengthword.length); i++){
      if(!isNaN(lengthword[i])){
        acumulador = acumulador+1}}
    return acumulador
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const lengthword= text.trim().split(' '); //el trim me ayuda a quitar espacios en una oración 
    //console.log(lengthword); y aquí para saber que el trim estaba funcionando y coortando los espacios
    let acumuladorSum=0;
    for(let i=0; i<(lengthword.length); i++){
    // if(lengthword[i] --- '') {
      // continue; // }
      if(!isNaN(lengthword[i])){
        //console.log(lengthword[i]); (esto me sirvió paraidentificar el error en la función)
        acumuladorSum = acumuladorSum + parseFloat(lengthword[i])
        //console.log(acumuladorSum); (aquí para ver el resultado)
      }
    }
    return acumuladorSum
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};



export default analyzer;
