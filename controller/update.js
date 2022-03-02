const Mahasiswa = require('../model/Mahasiswa')
const Validator = require('fastest-validator')
const v = new Validator();

module.exports = async (req, res) => {
    try {
        const body = req.body
        const schema = {
            name: "string|optional",
            nim: "string|optional",
            class: "string|optional"
        }

        const validate = v.validate(body, schema)

        if (validate.length) {
            return res.status(400).json({
                status: "error",
                message: validate
            })
        }

        const mahasiswa = await Mahasiswa.findById({
            _id: req.params.id
        })

        if (!mahasiswa) {
            return res.status(404).json({
                status: "error",
                message: "mahasiswa not found"
            })
        }

        const nim = req.body.nim
        if (nim) {
            const checkNim = await Mahasiswa.findOne({
                nim: nim
            })

            if (checkNim && nim !== mahasiswa.nim) {
                return res.status(409).json({
                    status: "error",
                    message: "nim already exist"
                })
            }
        }

        await Mahasiswa.updateOne(mahasiswa, body)

        const updatedMahasiswa = await Mahasiswa.findById({
            _id: req.params.id
        })

        return res.status(200).json({
            status: "success",
            data: updatedMahasiswa
        })



    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error
        })
    }
}