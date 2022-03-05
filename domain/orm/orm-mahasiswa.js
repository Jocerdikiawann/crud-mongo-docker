const conn = require('../repositories/repository-mongo');


exports.Reads = async () => {
    try {
        return await conn.db.connMongo.Mahasiswa.find();
    } catch (err) {
        console.log("err orm-mahasiswa.GetAll = ", err);
        return await {
            err: {
                status: "error",
                messsage: err
            }
        }
    }
}

exports.ReadById = async (id) => {
    try {
        return await conn.db.connMongo.Mahasiswa.findOne({
            _id: id,
        });
    } catch (err) {
        console.log(" err orm-mahasiswa.GetById = ", err);
        return await {
            err: {
                status: "error",
                messsage: err
            }
        }
    }
}

exports.Create = async (data) => {
    try {
        return await conn.db.connMongo.Mahasiswa.create(data)
    } catch (err) {
        console.log(" err orm-mahasiswa.Store = ", err);
        return await {
            err: {
                status: "error",
                messsage: err
            }
        }
    }
}

exports.DeleteOne = async (data) => {
    try {
        return await conn.db.connMongo.Mahasiswa.deleteOne(data)
    } catch (err) {
        console.log(" err orm-mahasiswa.Store = ", err);
        return await {
            err: {
                status: "error",
                messsage: err
            }
        }
    }
}

exports.UpdateOne = async (oldData, newData) => {
    try {
        const data = await conn.db.connMongo.Mahasiswa.updateOne(oldData, newData)
        console.log(`Updated Has Data : ${data}`)
        return data
    } catch (err) {
        console.log(" err orm-mahasiswa.Update = ", err);
        return await {
            err: {
                status: "error",
                messsage: err
            }
        }
    }
}