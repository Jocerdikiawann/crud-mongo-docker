const mongoose = require('mongoose');
const _enum = require('../../utils/enum_util');
const mahasiswa = require('../entities/mahasiswa-entity');
const config = require('../../utils/config_db_util')


let db = {};

if (config.db.mongodb && Object.keys(config.db.mongodb).length > 0) {
    const host = config.db.mongodb.host
    const port = config.db.mongodb.port
    const database = config.db.mongodb.database
    const nameconnection = config.db.mongodb.nameconnection
    mongoose.connect(`mongodb://${host}:${port}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    db[nameconnection] = {}
    db[nameconnection].conn = mongoose
    db[nameconnection].Mahasiswa = mahasiswa(mongoose)
    console.log("this db", db)
    exports.db = db;
} else {
    _enum.LogDanger("There is no linked database")
}