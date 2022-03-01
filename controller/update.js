const Mahasiswa = require('../model/Mahasiswa')
const Validotor = require('fastest-validator')
const v = new Validator();

module.exports = async (req, res) => {
    try {
        const body = req.body
        const schema = {
            name: "string|empty:false",
            nim: "string|empty:false",
            class: "string|empty:false"
        }

        const validate = v.validate(body, schema)

        if (validate.length) {
            return res.status(400).json({
                status: "error",
                message: validate
            })
        }

        const nim = body.nim

        const mahasiswa = await Mahasiswa.findOne({
            nim: nim
        })

        if (!mahasiswa) {
            return res.status(404).json({
                status: "error",
                message: "mahasiswa not found"
            })
        }

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

        await Mahasiswa.update({
            name: body.name,
            nim: body.nim,
            class: body.class
        })

        return res.status(200).json({
            status: "success",
            data: mahasiswa
        })

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error
        })
    }
}