//ponemos el path en el que se situan las variables de entorno
require('dotenv').config({
    path: '.env'
})
//Creamos un mock con todas las variables de entorno
jest.mock('./src/helpers/getEnvironments',()=>({
    getEnviroments: () => ({...process.env})
}))

import 'whatwg-fetch'