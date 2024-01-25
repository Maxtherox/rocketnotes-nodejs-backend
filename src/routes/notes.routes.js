const  { Router } = require ("express");

const NotesController = require("../controllers/NotesController"); //importação do controller, (como UserControllers é uma classe, ele precisa ser instanciado na memória) (instancia = realocar espaço na memória para a classe)
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router();


const notesController = new NotesController() //user controller sendo instanciado na memória <

notesRoutes.use(ensureAuthenticated);


notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;