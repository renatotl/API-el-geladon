const express = require('express');
const cors =require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/paleta.route');
const connectToDatabase = require('./src/database/database');



connectToDatabase()
app.use(express.json());// tranforma todas as REQ e RES em json 
app.use('/paletas', route);
app.use(cors());

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
//         'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
//       foto: 'assets/images/chocolate-belga.png',
//       preco: 7.0,
//     },
  // ];


  
// rota de get all pegue todos
// app.get('/paletas/todas-paletas', function (req, res) {
//   res.send(paletas);//meu objeto
// });



// rota de get by id pegue por id
// app.get('/paletas/paleta/:id', (req, res) => {
//     const parametro_id = req.params.id;
    // pegs o id vindo do parâmetro
    // const escolhaPaleta = paletas.find((paleta) => paleta.id == parametro_id);
    // nomeu arrey de paaletas faz um find que tem um função de callback vai procurar em cada paleta id vai interar rodar item por item vai compara com o id ddp parametro_id. Se for igual ele add no escolhaPalheta
  //   res.send(escolhaPaleta);
  // });

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



/* CONFIGURAÕES BÁSICAS DO INDEX.JS
const express = require('express');
const port = 3000;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


*/
