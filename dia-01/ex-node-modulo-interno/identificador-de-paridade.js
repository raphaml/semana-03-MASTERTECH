module.exports.retornarParidade = (numeros, pares, impares) =>{
    for (let numero of numeros){
        if(numero % 2 == 0){
            pares.push(numero);
        }else{
            impares.push(numero);
        }
    }
}

