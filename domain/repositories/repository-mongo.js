const config = require('config-yml');
const mongoose = require('mongoose');
const _enum = require('../../utils/network_util');
const mahasiswa = require('../entities/mahasiswa-entity');


let db = {};

if (config.db.mongodb && config.db.mongodb.length > 0) {
    config.db.mongodb.map((c) => {
        mongoose.connect(`mongodb://${c.host}/${c.database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db[c.nameconnection] = {}
        db[c.nameconnection].conn = mongoose;
        db[c.nameconnection].Mahasiswa = mahasiswa(mongoose);
    })
    exports.db = db;
} else {
    _enum.LogDanger("There is no linked database")
}