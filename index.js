// FileName: index.js

// Import express
const express = require('express')

// Initialize the app
const app = express();

// Setup server port
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
// Launch app to listen to specified port

const alumnosRouter = require('./alumnos/routes.config')
const apoderadosRouter = require('./apoderados/routes.config')
const asignaturasRouter = require('./asignaturas/routes.config')
const cursosRouter = require('./cursos/routes.config')
const nivelesRouter = require('./niveles/routes.config');
const profesoresRouter = require('./profesores/routes.config');

app.use(bodyParser.json());
alumnosRouter.routesConfig(app);
apoderadosRouter.routesConfig(app);
asignaturasRouter.routesConfig(app);
cursosRouter.routesConfig(app);
nivelesRouter.routesConfig(app);
profesoresRouter.routesConfig(app);

/*
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range, empresaId');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});
*/

app.listen(port, function () {
     console.log("Api corriendo en el puerto" + port);
});
