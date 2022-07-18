const express = require('express');
const route = express.Router();

const paletasController = require('../controllers/paleta.controler');
const { validId, validObjectBody } = require('../middlewares/paleta.middleware');
// const { validId, validObjectBody } chamamos isso de DESCONSTRUÇÃO DE OBJETO
const swaggerUi = require('swagger-ui-express');// pegando os arquivos do swahher para nossa constant swaggerUi
const swaggerDocument = require('../../swagger.json');


route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));


// O VALIDID vsai ser se está tudo certo caso o contrário ele nem entra em controller

route.get('/all-paletas', paletasController.findAllPaletasController);
route.get('/paleta/:id',validId,paletasController.findPaletaByIdController);
route.post('/create-paleta',validObjectBody,paletasController.createPaletaController);
route.put('/update-paleta/:id',validId,validObjectBody,paletasController.updatePaletaController);
route.delete('/delete/:id',validId,paletasController.deletePaletaController);

module.exports = route;


