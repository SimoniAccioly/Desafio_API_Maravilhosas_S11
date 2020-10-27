const express = require('express');
const router = express.Router();
const controller = require("../controllers/maravilhosas-controller")
const cors = require("cors")


/**
@route LISTAR todos os dados
@desc Lista todos as mulheres cadastradas no Banco de dados.
@access Public 
@endpoint http://localhost:porta/maravilhosas
**/
router.get("/maravilhosas", cors(), controller.getMaravilhosas)


/**
@route LISTAR pelo ID
@desc Lista uma determinada mulher pelo seu ID.
@access Public 
@endpoint http://localhost:porta/maravilhosas/:id
**/
router.get("/maravilhosas/:id", cors(), controller.getMaravilhosaById)


/**
@route ADICIONAR um novo dado
@desc Adiciona uma nova mulher no banco de dados.
@access Public 
@endpoint http://localhost:porta/maravilhosas
**/
router.post("/maravilhosas", cors(), controller.addMaravilhosa)


/**
@route ATUALIZAR um dado 
@desc Atualiza uma mulher que já existe enviando as alterações pelo body.
@access Public 
@endpoint http://localhost:porta/maravilhosas/:id
**/
router.put("/maravilhosas/:id", cors(), controller.updateMaravilhosa)

/**
@route DELETAR um dado 
@desc Deleta uma mulher selecionando ela pelo seu Id.
@access Public 
@endpoint http://localhost:porta/maravilhosas/:id
**/
router.delete("/maravilhosas/:id", cors(), controller.deleteMaravilhosa)


module.exports = router;

