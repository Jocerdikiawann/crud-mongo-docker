const Mahasiswa = require('../model/Mahasiswa')
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
    try {

        var mahasiswa = await Mahasiswa.findOne({
            id: req.params.id
        })

        if (!mahasiswa) {
            return res.status(404).json({
                status: "error",
                message: "mahasiswa not found"
            })
        }

        await Mahasiswa.deleteOne(mahasiswa)

        return res.status(200).json({
            status: "success",
            data: {
                message: "mahasiswa has been deleted"
            }
        })
    } catch (error) {
        return res.status(404).json({
            status: "error",
            message: error
        })
    }
}