//nosso banco de dados

/*
Vamos substituir os dados em memória (array de objetos) e trabalhar com a persistência de dados em um banco de dados real. No arquivo paletas.service.js, importaremos o model Paleta:*/

// const paletas = [
//     {
//       id: 1,
//       sabor: 'Açaí com Leite Condensado',
//       descricao:
//         'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//       foto: 'assets/images/acai-com-leite-condensado.png',
//       preco: 10.0,
//     },
//     {
//       id: 2,
//       sabor: 'Banana com Nutella',
//       descricao:
//         'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//       foto: 'assets/images/banana-com-nutella.png',
//       preco: 10.0,
//     },
//     {
//       id: 3,
//       sabor: 'Chocolate Belga',
//       descricao:
//       'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//       foto: 'assets/images/chocolate-belga.png',
//       preco: 7.0,
//     },
//   ];

// trazendo nossa models para Paletas
const Paletas =  require('../models/Paleta')
   /*
  /o nosso bd local precisa ser ativado e retirnar paletas
   const findAllPaletasService = () =>{/ nosso bd retorna paletas manda lá pra controller assim que assessar a rota 
    return paletas;
  };
*/

// substituimos o código acima por este e usamos a async já que precisamos pegar informações no banco de dados
  const findAllPaletasService = async () => {
    const allPaletas = await Paletas.find();// o find é um metodo do mongoose ELE FAZ UMA BUSCA DE TODOS OS MEUS DOCUMENTOS NA MINHA COLLECTIO PALETAS pela conexão do database
    return allPaletas;
  };



 /*ANTIGO
  Seguindo a mesma ideia feita na rota Find Paletas, vamos substituir o código antigo que realizava uma busca por ID no array de objetos
  ---
  const findPaletaByIdServicer = (parametro_id) => { / nosso função recebe o parametro_id que vem lá de controler e comparando com a lista de paletas e retorna
  return paletas.find((paleta) => paleta.id == parametro_id);/esse código é nativo do js

  }
*/

// o findById() é a mesma coisa do  paletas.find((paleta) => paleta.id == parametro_id);/esse código é nativo do js




// E colocaremos a função findById do mongoose que faz uma busca por ID no banco de dados, não esquecendo de transformar o método em assíncrono:

const findPaletaByIdService = async (idParam) => {
  const paleta = await Paletas.findById(idParam);
  return paleta;
};





/* ANTIGO
  const createPaletaService = (newPaleta) =>{
    const newId = paletas.length + 1;/criando um novo id
    newPaleta.id = newId;/ cria um novo campo no objeto add newid
    paletas.push(newPaleta);/ paletas recebe newpaleta
    return newPaleta; / retorna nova paleta

  };
  */

// NOVO
  const createPaletaService = async (newPaleta) => {
    const createdPaleta = await Paletas.create(newPaleta)//criando uma nova paleta e colocando em Paletas e tudo isso vai para paletaCriada//create é um função
    return createdPaleta;
  };




/*ANTIGO
  O código anterior, através da função findIndex, procurava o ID (informado pelo usuário) no array de objetos e substituia pelos dados passados no body, muito parecido com o método create, apenas conservando o ID
const updatePaletaService = (id, paletaEdited)  => {
  / i 'id' está entre aspas porque é a chave id paletaEdited está recebendo um json
    paletaEdited['id'] = id;/ paletaEdited recebe o id que está vindo
    /pegando a posição dessa paleta no arrey
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);/faz im finindex() em paleta por paleta. se eu quero mudar o id 2 em paletas ele vai achar e add index no paleIndex lembando que começa em 0
    paletas[paletaIndex] = paletaEdited;/ na paleta posição 2 mude o valor dela para paletaEdited
    return paletaEdited;
};
*/

//NOVO
const updatePaletaService = async (id, paletaEdited) => {
  const updatePaleta = await Paletas.findByIdAndUpdate(id, paletaEdited);//vou procurar pelo id que vem do parâmetro e fazer o udpdate
  return updatePaleta;
};

/*ANTIGO
Anteriormente, através da função findIndex, o método procurava o ID (informado pelo usuário) no array de objetos e deletava a paleta que estava associada àquele ID através da função splice:
const deletePaletaService = (id) => {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);/ pega o index na posição desse arrey
    return paletas.splice(paletaIndex, 1);/ uma forma de deletar 
    / podemos vafez delite paltas na posição
};
*/




//NOVO
const deletePaletaService = async (idParam) => {
  return await Paletas.findByIdAndDelete(idParam);//  findByIdAndDelete é uma função
};





  module.exports = {
    findAllPaletasService,
    findPaletaByIdService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService
  };

  // o seervice é nossa camanda mais interna que controla nosso dados
  // o congroler faz a intermediação entre service a a rota
  // rota vai fazer a interação com o cliente
