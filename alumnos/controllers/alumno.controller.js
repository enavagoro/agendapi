const AlumnoModel = require('../models/alumno.model');

/*

exports.insert = (req, res) => {
  AlumnoModel.createCliente(req.body)
    if (err) {
        res.json({
            status: "error",
            message: err,
        });
    }
    res.json({
        status: "success",
        message: "Contacts retrieved successfully",
        data: contacts
    });
  };


exports.list = (req, res) => {
  var empresaid = req.headers.empresaid;
let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
let page = 0;
if (req.query) {
if (req.query.page) {
req.query.page = parseInt(req.query.page);
page = Number.isInteger(req.query.page) ? req.query.page : 0;
}
}
ClienteModel.list(limit, page, empresaid)
.then((result) => {
res.status(200).send(result);
})
};
exports.getById = (req, res) => {
ClienteModel.findById(req.params.clienteId)
.then((result) => {
res.status(200).send(result);
});
};
exports.patchById = (req, res) => {
ClienteModel.patchCliente(req.params.clienteId, req.body)
.then((result) => {
res.status(204).send({});
});
};
exports.removeById = (req, res) => {
ClienteModel.removeById(req.params.clienteId)
.then((result)=>{
res.status(204).send({});
});
};
*/
