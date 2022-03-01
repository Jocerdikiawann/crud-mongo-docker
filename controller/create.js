const Mahasiswa = require('../model/Mahasiswa')
const Validator = require("fastest-validator");
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

        const mahasiswa = await Mahasiswa.findOne({
            nim: body.nim
        })

        if (mahasiswa) {
            return res.status(409).json({
                status: "error",
                message: "nim already exist",
            })
        }

        const data = {
            name: body.name,
            nim: body.nim,
            class: body.class,
        }

        const createdMahasiswa = await Mahasiswa.create(data)

        return res.json({
            status: "success",
            data: {
                id: createdMahasiswa.id
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error
        })
    }
}