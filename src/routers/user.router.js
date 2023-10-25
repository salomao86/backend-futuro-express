const router = require("express").Router();
const userController = require("../controllers/user.controller");
const authValidator = require("../validators/auth.validator");
const userValidator = require('../validators/user.validator');

router.get("/find/:id", authValidator, userController.findUserByIdController);
router.get("/findAll", authValidator, userController.findAllUserController);

router.post("/create", userValidator.validationBodyRules, userValidator.checkRules, userController.createUserController);
router.put("/update/:id", authValidator, userValidator.validationBodyRules, userValidator.checkRules, userController.updateUserController);
router.delete("/delete/:id", authValidator, userController.deleteUserController);

module.exports = router;