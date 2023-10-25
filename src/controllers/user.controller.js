const userService = require('../services/user.service');

const findAllUserController = async (req, res) => {
    try {
        res.send(await userService.findUserService());
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            res.status(404).send({ message: "Usuário não encontrado, tente novamente!" });
        } else {
            res.status(200).send(user);
        }

    } catch (err) {
        if (err) {
            console.log(err.kind == "ObjectId");
            return res.status(400).send({ message: "ID informado está errado, tente novamente" });
        }
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const createUserController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            createdAt: new Date(),
        }
        res.send(await userService.createUserService(corpo));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const updateUserController = async (req, res) => {
    try {
        res.send(await userService.updateUserService(req.params.id, req.body));
    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

const deleteUserController = async (req, res) => {
    try {
        const del = await userService.deleteUserService(req.params.id);
        if(del != null ){
            res.status(200).send({ message: 'deletado com sucesso!' });
        } else {
            res.status(404).send({ message: 'Usuario não encontrado para deletar' });
        }

    } catch (err) {
        res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde" });
        console.log(err.message);
    }
};

module.exports = {
    findAllUserController,
    findUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
}