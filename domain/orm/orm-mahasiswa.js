const conn = require('../repositories/repository-mongo');


exports.Reads = async () => {
    try {
        return await conn.db.mongoconnection.Mahasiswa.find();
    } catch (error) {
        console.log("err orm-mahasiswa.GetAll = ", error);
        return await {
            err: {
                status: "error",
                message: error.message
            }
        }
    }
}

exports.ReadById = async (id) => {
    try {
        return await conn.db.mongoconnection.Mahasiswa.findOne({
            _id: id,
        });
    } catch (error) {
        console.log(" err orm-mahasiswa.GetById = ", error);
        return await {
            err: {
                status: "error",
                message: error.message
            }
        }
    }
}

exports.ReadByNim = async (nim) => {
    try {
        return await conn.db.mongoconnection.Mahasiswa.findOne({
            nim: nim
        })
    } catch (error) {
        console.log(" err orm-mahasiswa.ReadByNim = ", error);
        return await {
            err: {
                status: "error",
                message: error.message
            }
        }
    }
}

exports.Create = async (data) => {
    try {
        return await conn.db.mongoconnection.Mahasiswa.create(data)
    } catch (error) {
        console.log(" err orm-mahasiswa.Store = ", error);
        return await {
            err: {
                status: "error",
                message: error.message
            }
        }
    }
}

exports.DeleteOne = async (data) => {
    try {
        return await conn.db.mongoconnection.Mahasiswa.deleteOne(data)
    } catch (error) {
        console.log(" err orm-mahasiswa.Store = ", error);
        return await {
            err: {
                status: "error",
                message: error.message
            }
        }
    }
}

exports.UpdateOne = async (oldData, newData) => {
    try {
        const data = await conn.db.mongoconnection.Mahasiswa.updateOne(oldData, newData)
        console.log(`Updated Has Data : ${data}`)
        return data
    } catch (error) {
        console.log(" err orm-mahasiswa.Update = ", error);
        return await {
            err: {
                status: "error",
                message: error.message
            }
        }
    }
}