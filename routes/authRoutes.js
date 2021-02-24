/**
 * Ruta:/api/login
 */

const { Router } = require('express')
const { check } = require('express-validator')
const { login, googleSignIn } = require('../controllers/authController')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()


router.post('/', 
[
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],
login
)


router.post('/google', 
[
    check('token', 'El token de Google es obligatoria').not().isEmpty(),
    validarCampos
],
googleSignIn
)






module.exports = router