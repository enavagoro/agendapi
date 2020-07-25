const alumnosController = require('./controllers/alumnos.controller');

/*
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
*/

/* Manejo de Usuarios
const config = require('../common/config/env.config');
const ADMIN = config.permissionLevels.ADMIN;
const PAID = config.permissionLevels.PAID_USER;
const FREE = config.permissionLevels.NORMAL_USER;
*/

exports.routesConfig = function (app) {
  app.post('/alumno', [
    alumnosController.insert
  ]);

  app.get('/alumno', [
    alumnosController.list
  ]);

  app.get('/alumno/:alumnoId', [
    alumnosController.getById
  ]);

  app.patch('/alumno/:alumnoId', [
    alumnosController.patchById
  ]);

  app.delete('/alumno/:alumnoId', [
    alumnosController.removeById
  ]);
};
