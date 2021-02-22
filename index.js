const express = require('express')
require('dotenv').config()
const cors = require('cors')

const { dbConnection } = require('./database/config')

//crear el servidor de express

const app = express()

// Configurar CORS
app.use(cors())

//Base de datos
dbConnection()


//user:mean_user
//paswword: QtRRLtzoykIHrWFf


//Rutas
app.get('/', (req, res)=>{

    res.status(400).json({
        ok:true,
        msg:'Hola mundo'
    })

})


app.listen(process.env.PORT , ()=>{
    console.log('Servidor corriendo en puerto '+ process.env.PORT)
})