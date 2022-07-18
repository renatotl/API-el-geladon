// contruindo as funções 

const paletasService = require('../services/paleta.service');// trazendo o service que irá fazer o contato com o bd para dentro do paletasService
const mongoose = require('mongoose');// foi necessári importar o mongoose. Usamos ele no findPaletasById
 

/*função pega todos///ANTIGO
const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();/ nosso paletas service vai chamar a função findAllPaletasControleer  e executando essa função///ANTIGO
  

if(paletas.length == 0){
    return res.status(404).send({message: "Não existe nenhuma paleta cadastrada!"})//404 significa not found
}
res.send(paletas);/ renderizar todas as paletas

};*/


//NOVO POS BD
const findAllPaletasController = async (req, res) => {
    const allPaletas = await paletasService.findAllPaletasService();

    if(allPaletas.length == 0){
        return res.status(404).send({message: "Não existe nenhuma paleta cadastrada!"})//404 significa not found
    }
    
    res.send(allPaletas);// renderizar todas as paletas
    
  };



/* pega por id  ANTIGO
const findPaletaByIdController = (req, res) => {
    const parametro_id = Number(req.params.id);/ pega o id vindo do parâmetro

    / validação se o Id é de fato um id
    if(!parametro_id){
        return res.status(400).send({message: "Id inválido!"})/Primeira validação
  
    }
    const escolhaPaleta = paletasService.findPaletaByIdServicer(parametro_id);

     / validação depois da escolha se o Id selecionado existe
     if(!escolhaPaleta){
        return res.status(404).send({message: "Paleta não encontrada!"})/Segunda validação
  
    }

    res.send(escolhaPaleta);
};
*/


const findPaletaByIdController = async (req, res) => {
    const idParam = req.params.id;// pega o id vindo do parâmetro


/* DESTE CÓDIGO FOI REMOVIDO E EMCAMINHADO PARA PASTA MIDDLERWARE APOS
    / validação se o Id é de fato um id
    if(!mongoose.Types.ObjectId.isValid(idParam)){
        return res.status(400).send({message: "Id inválido!"})//Primeira validação
  
    }
    */
    const chosePaleta = await paletasService.findPaletaByIdService(idParam);

     // validação depois da escolha se o Id selecionado existe
     if(!chosePaleta){
        return res.status(404).send({message: "Paleta não encontrada!"})//Segunda validação
  
    }

    res.send(chosePaleta);
};



//ANTIGO
/* acessamos a rota reatePaletaController e ela acessa createPaletaService que add em newPalta e manda new Paleta para o cliente
/vamos chamar a função do Service e separa o Json com a paleta para enviar a função
const createPaletaController = (req,res) => {
   
    const paleta = req.body;/ pega a requisição pelo bady//chama o service e encia a paleta nova 
   
    /validando paletas
    if(!paleta
         || !paleta.sabor
         || !paleta.descricao
         || !paleta.foto
         || !paleta.preco
         ){/ se não tiver paleta
    / o return é pra parar a função e retornar algo
   return res.status(400).send({message: "Envie todos os campos da paleta!"})
     }

    const newPaleta = paletasService.createPaletaService(paleta);
    res.status(201).send(newPaleta);/ mostra o nova paleta
/podemos altrar o status para positivo o 201 é created
};
*/
//NOVO
const createPaletaController = async (req, res) => {
    const paleta = req.body;
  
    // if (
    //   !paleta || / este parte foi pararno midllerware
    //   !paleta.sabor ||
    //   !paleta.descricao ||
    //   !paleta.foto ||
    //   !paleta.preco
    // ) {
    //   return res.status(400).send({
    //     message:
    //       'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    //   });
    // }
  
    const newPaleta = await paletasService.createPaletaService(paleta);// porque estamos esperando a paletaService ? ela retorna algo pra depois que ela criar uma nova paleta. ela espera oa Service e o Service espera o banco
  
    res.send(newPaleta);
  };

/*
ANTIGO
/vamo chamar a função e enviar o id e a paleta editar
const updatePaletaController = (req,res)  => {
    const idParam = Number(req.params.id);/ recebe o id

if(!idParam){
    return res.status(400).send({message: 'Id inválido'})/ valida se o id é um id
}


    const paletaEdit = req.body;/ recebe o body a paleta que vai ser editada

    if(!paletaEdit
        || !paletaEdit.sabor
        || !paletaEdit.descricao
        || !paletaEdit.foto
        || !paletaEdit.preco
        ){/ se não tiver paleta
   / o return é pra parar a função e retornar algo
  return res.status(400).send({message: "Envie todos os campos da paleta!"})/ valida se tem informação nos campos
    }

    const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);/ faz o update no service/ mandando 2 paramentor para atualizar
    res.send(updatedPaleta);

};
*/
//NOVO
const updatePaletaController = async (req, res) => {
    const idParam = req.params.id;
    
  /* DESTE CÓDIGO FOI REMOVIDO E EMCAMINHADO PARA PASTA MIDDLERWARE APOS
    if (!mongoose.Types.ObjectId.isValid(idParam)) 
     return res.status(400).send({ message: 'ID inválido!' });
      ;
    }
    */


    const paletaEdit = req.body;
    const chosenPaleta = await paletasService.findPaletaByIdService(idParam);
  
    if (!chosenPaleta) {
      return res.status(404).send({ message: 'Paleta não encontrada!' });
    }
  
    if (
      !paletaEdit ||
      !paletaEdit.sabor ||
      !paletaEdit.descricao ||
      !paletaEdit.foto ||
      !paletaEdit.preco
    ) {
      return res.status(400).send({
        message: 'Você não preencheu todos os dados para editar a paleta!',
      });
    }
  
    const updatedPaleta = await paletasService.updatePaletaService(
      idParam,
      paletaEdit,
    );
  
    res.send(updatedPaleta);
  };

//ANTIGO
/*vamos chamar o função e enviar o id para identificarmos no service o objeto que será deletado
const deletePaletaController = (req,res) => {
    const idParam = Number(req.params.id);/ foi necessário transforma para number

    if(!idParam){
        return res.status(400).send({message: 'Id inválido'})// valida se o id é um id
    }

    paletasService.deletePaletaService(idParam);

    

    res.send({ message: 'Paleta deletada com sucesso!' });
    / envolvemos a resposta em chaves colocamos uma chave um key (message) e um valor Paleta deletada com sucesso!   retronando um messagem em formato json

};
*/



/*NOVO
No  arquivo paletas.controller.js, vamos transformar o método em assíncrono e importar o método findPaletaByIdpara evitar que o usuário tente deletar uma paleta que não exista no banco de dados
*/

const deletePaletaController = async (req, res) => {
    const idParam = req.params.id;
  
    /* DESTE CÓDIGO FOI REMOVIDO E EMCAMINHADO PARA PASTA MIDDLERWARE APOS
    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'ID inválido!' });
      
    }
  */
    const chosenPaleta = await paletasService.findPaletaByIdService(idParam);
  
    if (!chosenPaleta) {
      return res.status(404).send({ message: 'Paleta não encontrada!' });
    }
  
    await paletasService.deletePaletaService(idParam);
  
    res.send({ message: 'Paleta deletada com sucesso!' });
  };




module.exports = {
   findAllPaletasController,
   findPaletaByIdController,
   createPaletaController,
   updatePaletaController,
   deletePaletaController
};

// findAllPaletasController: apenas retornaremos o arrey com todas as paletas


//    findPaletaByIdController: recebemos o id do controller e realizamos o find()

