//user:mean_user
//paswword: QtRRLtzoykIHrWFf

const express = require('express')
require('dotenv').config()
const cors = require('cors')

const { dbConnection } = require('./database/config')

//crear el servidor de express

const app = express()

// Configurar CORS
app.use(cors())

//Lectura y parseo del body
app.use(express.json())

//Base de datos
dbConnection()

//Rutas
app.use('/api/usuarios', require('./routes/usuariosRoutes'))
app.use('/api/hospitales', require('./routes/hospitalesRoutes'))
app.use('/api/medicos', require('./routes/medicosRoutes'))
app.use('/api/login', require('./routes/authRoutes'))
app.use('/api/todo', require('./routes/busquedasRoutes'))
app.use('/api/upload', require('./routes/uploadsRoutes'))




app.listen(process.env.PORT , ()=>{
    console.log('Servidor corriendo en puerto '+ process.env.PORT)
})