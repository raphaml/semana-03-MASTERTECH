// ESSE process.argv MOSTRA QUALQUER COISA QUE EU INSERIR NA PARTE DO node index.js NO PROPRIO CONSOLE
let argumentos = process.argv;
let notas = [];

const calcMedia = (notas) => {
    let total = 0;

    for(let nota of notas){
        total += nota;
    }
// SEMPRE QUE CRIARMOS UMA FUNÇÃO E QUEREMOS QUE ELA NOS RETORNE ALGO, DEVEMOS USAR UM RETURN
// NESSE CASO QUEREMOS QUE A FUNÇÃO NOS RETORNE O VALOR TOTAL DIVIDO PELO TOTAL DE ITENS DO VETOR
    return total / notas.length;
}
// QUANDO EU COMEÇO MEU CONTADOR i COM UM INDICE MAIOR QUE ZERO ELE IRA IGNORAR O PRIMEIRO ITEM DO MEU VETOR
// NO NOSSO EXEMPLO COMO PRECISAVAMOS IGNORAR 2 ENDEREÇOS NO CASO O INDICE 0 E 1 
// TINHAMOS QUE COMEÇAR ENTAO COM O i = 2 POIS ENTAO ELE IRIA COMEÇAR A MOSTRA DO TERCEIRO ITEM DO VETOR
for(let i = 2; i < argumentos.length; i++){
// LEMBRANDO QUE O VETOR VEM COMO STRING ENTAO USA-SE A FUNÇÃO Number() PARA MUDAR DE STING PARA NUMEROS
    notas.push(Number(argumentos[i]));
}

console.log(calcMedia(notas));

    if (calcMedia(notas) <= 6){
        resultado = 'aprovado';
    }else{
        resultado = 'reprovado';
    }

console.log(`você foi ${resultado}`);
