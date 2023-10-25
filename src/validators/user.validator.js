const { body, validationResult } = require('express-validator');

exports.validationBodyRules = [
    body('nome', 'nome é obrigatório').notEmpty(),
    body('email', 'email é obrigatório').isEmail(),
    body('senha', 'senha deve ser complexa por questões de segurança').isStrongPassword()
];

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};