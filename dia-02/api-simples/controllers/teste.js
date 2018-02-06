exports.listar = (req, res) => {res.send("<script>alert('Estou acessando a minha rota teste')</script>")};

exports.criar = (req, res) =>{
    let dados = req.body
    res.send(dados)
};