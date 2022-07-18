const mongoose = require('mongoose');// criamos a constante mongoose e e usamos o require para pegar o mogoose no nosso modules e trazer para cá
//O IDELA ERA DEIXAR OS NOMES DO BANCO EM INGLES COMO SABOR, DESCRICAO, FOTO, ECT

//No Schema você estrutura os campos do seu documento, definindo o tipo e sua obrigatoriedade:

const PaletaSchema = new mongoose.Schema({//é o schema o dodelo do nosso documento que mandaremo para o DB
  sabor: {
     type: String,
      required: true
     },// required: true é obrigatório
  descricao: {
     type: String,
      required: true 
    },
  foto: { 
    type: String,
     required: true
 },
  preco: {
     type: Number,
      required: true 
    },
});
// quantos campos vão ter e que tipo de campo é 


//expostanto com um nome específico
//O código a seguir cria a collection paletas no banco:
const Paleta = mongoose.model('paletas', PaletaSchema);
// estamos referenciando a collectio nque já existe no mongoDb. Dentro do parêntese ('paletas', PaletaSchema) paletas se refere ao collection no mongoDB e PaletaSchema se refere a const que criei aqui 


// exportando Paleta para poder acessar em qualquer lugar do nosso projeto
module.exports = Paleta;
