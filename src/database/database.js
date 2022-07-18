const mongoose = require('mongoose');// criamos a constante mongoose e e usamos o require para pegar o mogoose no nosso modules e trazer para cá

const connectToDatabase = () => {// estabelece a conexão com o mogodb

    // nos não acessamos atravez de http, mas sim pelo mongodb por isso o //
    mongoose.connect('mongodb://localhost:27017/paletas-bd', { 
    useNewUrlParser: true,//Para que o Moongoose use o novo sistema de URL
    useUnifiedTopology: true,//Mecanismo de monitoramento de Banco de Dados
    // esses códigos impedem que dé mal funcionamento com o caminho localhost27017
})//passando o endereço do nosso mongoDb
    .then(() => 
        console.log('MONGO DB CONECTADO')
      )
      .catch((err) => 
         console.log(`Erro na conexao com o banco: ${err}`)
    );

    //Inserimos uma validação para que se algo der errado durante a tentativa de conexão, seja retornado uma mensagem de erro ou se der certo de sucesso
};

// CÓDIGOS FORA DO INDEX.JS PRECISAM SER EXPORTADOS COMO MODULE!!!!
module.exports = connectToDatabase;



// algumas alterações feitas dendo em vista o termino do projeto 1 com o projeto 2
// 27 - instalar o MongoDb: npm i mongoose

// 28 - criar pasta database e dentro dela criar arquivoo database.js dentro de src

// 29 - puxamos o mongoose do modules pelo require em database.js

// 30 - em databse criamos a função function connectToDatabase()

// 31 - deposi das alteraçoes em database precisamos colocar um código no index
// const connectToDatabase = require('./src/database/database');
// e executar a função NO INDEX : connectToDatabase()
// QUANDO USAR O NPM RUN DEV1; PRECISA APARACER ESCRITO MONGODB CONECTADO! NO TERMINLA

// 32 - criar a pasta models no src 
// 33 - desntro da past models cirar Paleta.js com P maúsculo
// 34 - importamos o mongoose para models const mongoose = require('mongoose');
// 35 - estruturar Schema o que no nosso caso foi o const PaletaSchema
// 36 - O código a seguir cria a collection paletas no banco: const Paleta = mongooose.model('paletas', PaletaSchema);
// 37 - exposrta module.exports = Paleta;
// 38 - Vamos substituir os dados em memória (array de objetos) e trabalhar com a persistência de dados em um banco de dados real. No arquivo paletas.service.js, importaremos o model Paleta: const Paleta = require('../models/Paleta');
// 39 - agora podemos deletar o array de objetos, que chamamos de const paletas, deixando o paletas.service.js dessa forma:
// 40 - criar na matriz arquivo paletasData.json

// e colar nele o nosso arrey memoria local formatado como é um arqui vo em json é necessário o uso de aspas duplas e não pode ter vírgula nos últimos itens
//41 - vamos no mongoDB clicar no nosso banco que no caso é o paletas-bd e IMPORT DATA
// achar o arquivo paletasData.jason e manter type json 
// 42 como agora estamos usando o BD temos que fazer algumas alterações no findAllPaletasController e Service

//43 - vamos refatorar o nosso código começando por controllers fazendo uma padronização dos nomes das variáveis, exemplo, deixando todas em inglês. em models o ideal é deixar nomes em inglês. em routes fizemos um padrão nos nomes deicando em inglês também. 

// ======

// 44 - precisamos instalar a biblioteca npm i swagger-ui-express e fazer um arquivo na raiz do projeto chamado: swagger.json 
// 45 trazer para a nossa route const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../../swagger.json');
// atualizamos o arquivo swagger.json, na linha 18 é necessario colar o link do projeto já no heroku e será criar um PATH diferente para cada rota que tivermos
