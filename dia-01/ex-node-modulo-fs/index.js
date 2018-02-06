const fs = require ('fs');
let cores = 'vermelho, rosa, azul, branco'

// FUNÇÃO callback SERVE PARA QUE NOS POSSAMOS TRATAR DE EVENTOS ASSINCRONOS POIS NÃO SABEMOS EM QUE ORDEM
// AS COISAS ACONTECEM ENTAO PARA QUE NÃO FIQUEMOS SEM SABER O POR QUE DE ALGUM ERRO, USAMOS A FUNÇÃO DE
// callback PARA QUE POSSAMOS SABER CASO DE ALGUM ERRO
fs.readFile('nome.txt', (erro, dados) =>{
    if(erro){
        console.log(erro);
    }else{
// SEMPRE QUE APARECER O BUFFER DEVEMOS CONVERTER PARA toString(), PARA TRANSFORMAR O VALOR RECEBIDO PARA TEXTO
        console.log(dados.toString());
    }

});
// LEMBANDO QUE AS FUNÇÕES readFile e writeFile SÃO DO MODULO INTERNO fs DO PROPRIO NODE.js ENTAO DEVEMOS
// SEMPRE FAZER O REQUIRE DELA CASO QUISERMOS USAR ESSES METODOS readFile E writeFile
fs.writeFile('cores.txt', cores, (erro) =>{
    if (erro){
        console.log(erro)
    }else{
        console.log(`o seu arquivo foi criado com sucesso.`)
    }
});