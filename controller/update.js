const Mahasiswa = require('../model/Mahasiswa')

updateMahasiswa = async (req, res) => {
    try {
        const body = req.body
        const mahasiswa = await Mahasiswa.findOne({
            _id: body.id
        })





    } catch (error) {

    }
}