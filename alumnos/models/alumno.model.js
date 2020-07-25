const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const AlumnoSchema = new Schema({

    estado : Boolean,
    nombre : String,
    rut : String,
    nivel: Integer
});
