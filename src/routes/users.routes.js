const  { Router } = require ("express");
const multer = require ("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController"); //importação do controller, (como UserControllers é uma classe, ele precisa ser instanciado na memória) (instancia = realocar espaço na memória para a classe)
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const UserAvatarController = require("../controllers/UserAvatarController"); //

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const usersController = new UsersController() //user controller sendo instanciado na memória <
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;