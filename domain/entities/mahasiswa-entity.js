module.exports = (db) => {
    var mahasiswaSchema = new db.Schema({
        name: {
            type: String,
            required: true,
        },
        nim: {
            type: String,
            required: true
        },
        class: {
            type: String,
                required: true
        },
    }, {
        timestamps: true
    })
    return db.model('mahasiswa', mahasiswaSchema)
}