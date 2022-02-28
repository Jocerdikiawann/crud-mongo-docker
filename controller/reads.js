const Mahasiswa = require('../model/Mahasiswa')

module.exports = async (req, res) => {
    try {
        var mahasiswa = await Mahasiswa.find()
        if (mahasiswa.length <= 0) {
            return res.status(200).json({
                "status": "error",
                "data": []
            })
        }
        return res.status(200).json({
            "success": true,
            "data": mahasiswa
        })
    } catch (error) {
        return res.status(404).json({
            "status": "error",
            "message": error
        })
    }
}