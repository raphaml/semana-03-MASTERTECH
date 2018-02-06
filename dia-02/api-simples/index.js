// USA-SE SEMPRE ESSE "const express = require('express');" PARA LINKARMOS A NOSSA BIBLIOTECA JSON
const express = require('express');
const bodyParser = require ('body-parser');
const testeController = require ('./controllers/teste');
// AQUI CRIEI UMA CONSTANTE QUE TERA TODAS AS ATRIBUIÇÕES DO express
const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Servidor OK, Acesse em http://localhost:3000')
});

// QUANDO QUISERMOS QUE NOSSO BACK-END DE UM GET NO MEU URL TENHO QUE USAR O .get(/rota) E TAMBEM TENHO QUE
// TER UMA FUNÇÃO DE CALLBACK ONDE OS DOIS PARAMETROS SEMPRE SERÃO request E response POIS O get IRA FAZER UM request
// E O API IRA DEVOLVER COM UM response QUE NO MEU CASO É O console.log

app.get('/teste', testeController.listar);

// QUANDO EU ACESSO O TESTE USANDO console.log A MENSAGEM SO IRA APARECER NO TERMINAL
// POREM SE EU USAR ESSA SINTAXE "res.send("<script>alert('Estou acessando a minha rota teste')</script>")"
// ESTOU DIZENDO QUE MEU response / resposta, ENVIARA "send" VIA script UM ALERT PARA PODER VISUALIZAR VIA WEB  

app.post('/teste', testeController.criar);

// NO FINAL TIRAMOS AS FUNÇÕES DO INDEX E USAMOS O ESQUEMA DE MODULOS INTERNOS PARA ALEM DE DEIXAR O CODIGO MAIS VISUAL
// JA ESTAMOS NOS PREPARANDO PARA O ANGULAR