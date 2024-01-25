const  { Router } = require ("express");

const TagsController = require("../controllers/TagsController"); //importação do controller, (como UserControllers é uma classe, ele precisa ser instanciado na memória) (instancia = realocar espaço na memória para a classe)
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();


const tagsController = new TagsController() //user controller sendo instanciado na memória <



tagsRoutes.get("/",ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;