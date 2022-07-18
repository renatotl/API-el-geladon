const mongoose = require('mongoose');
//. A ROTA ao ser acessada o middlerware entra em ação antes dessa requisição encaminhar para o controlller.
// O que é  o NEXT: depois que o middlerware foi executado ele faz o next que é executar o próximo chamada ou função que neste caso é paletasController.findAllPaletasController
const validId = (req, res, next) => {//todo id que vier do meu parametro vai ser validado antes de seguir para o meu projeto
  const idParam = req.params.id;// pegando o id do parametro
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();// se for válido next(): siga adiante 
};

const validObjectBody = (req, res, next) => {// tido que chegar do body vai ser checado 
  const paleta = req.body;// pegando na requisição a paleta e validando
  if (// validando todos os campos
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da paleta!' });
  }
  next();
};



module.exports = {
  validId,
  validObjectBody,
};
