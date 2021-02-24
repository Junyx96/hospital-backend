/*
    BUSQUEDA
    /api/todo/
*/

const { Router } = require('express')
const { getTodo, getColeccion } = require('../controllers/busquedasController')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/:busqueda', validarJWT ,getTodo)

router.get('/coleccion/:tabla/:busqueda', validarJWT ,getColeccion)





module.exports= router