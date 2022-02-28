const Mahasiswa = require('../model/Mahasiswa')

module.exports = async (req, res) => {
    try {

        var mahasiswa = await Mahasiswa.findOne({
            nim: req.params.nim
        })

        if (!mahasiswa) {
            return res.status(404).json({
                status: "",
                message: "mahasiswa not found"
            })
        }

        return res.status(200).json({
            status: "success",
            data: mahasiswa
        })
    } catch (error) {
        return res.status(404).json({
            status: "error",
            message: error
        })
    }
}