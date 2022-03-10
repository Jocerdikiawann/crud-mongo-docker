const network_util = require('../../utils/network_util')
const log_util = require('../../utils/log_util')
const _enum = require('../../utils/enum_util')
const ormMahasiswa = require('../../domain/orm/orm-mahasiswa')
const Validator = require("fastest-validator");
const v = new Validator();

let _status = "",
    _message = "",
    _data = {}

exports.Reads = async (req, res) => {
    try {
        response_orm = await ormMahasiswa.Reads()
        response_orm.sort((a, b) => {
            return a.nim - b.nim
        })
        if (response_orm.err) {
            _status = response_orm.err.status, _message = response_orm.err.message,
                _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        } else {
            _status = "success",
                _data = await network_util.ResponseServiceHasData(_status, response_orm)
            return res.status(_enum.CODE_OK).json(_data)
        }
    } catch (error) {
        console.log("error: ", error)
        _data = await network_util.ResponseServiceNoData("error", error.message)
        return res.status(_enum.CODE_INTERNAL_SERVER_ERROR).json(_data)
    }
}


exports.ReadById = async (req, res) => {
    try {
        const id = req.params.id
        response_orm = await ormMahasiswa.ReadById(id)
        response_orm.sort((a, b) => {
            return a.nim - b.nim
        })
        if (response_orm.err) {
            _status = response_orm.err.status, _message = response_orm.err.message,
                _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        } else {
            _status = "success",
                _data = await network_util.ResponseServiceHasData(_status, response_orm)
            return res.status(_enum.CODE_OK).json(_data)
        }
    } catch (error) {
        console.log("error: ", error)
        _status = response_orm.err.status,
            _data = await network_util.ResponseServiceNoData(_status, error.message)
        return res.status(_enum.CODE_INTERNAL_SERVER_ERROR, _data).json(_data)
    }
}

exports.Create = async (req, res) => {
    try {
        const body = req.body
        const schema = {
            name: "string|empty:false",
            nim: "string|empty:false",
            class: "string|empty:false"
        }

        const validate = v.validate(body, schema)
        if (validate.length) {
            _status = "error",
                _message = validate,
                _data = await network_util.ResponseServiceNoData(_status, _message);
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        }

        const filterByNim = await ormMahasiswa.ReadByNim(body.nim)

        if (filterByNim) {
            _status = "error",
                _message = "nim already exist",
                _data = await network_util.ResponseServiceNoData(_status, _message);
            return res.status(_enum.CODE_CONFLICT).json(_data)
        }

        await ormMahasiswa.Create(body)
        response_orm = await ormMahasiswa.Reads()
        response_orm.sort((a, b) => {
            return a.nim - b.nim
        })
        if (response_orm.err) {
            _status = response_orm.err.status, _message = response_orm.err.message,
                _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        } else {
            _status = "success",
                _data = await network_util.ResponseServiceHasData(_status, response_orm)
            return res.status(_enum.CODE_CREATED).json(_data)
        }
    } catch (error) {
        _status = "error", _message = error.message, _data = await network_util.ResponseServiceNoData(_status, _message)
        return res.status(_enum.CODE_BAD_REQUEST).json(_data)
    }
}


exports.UpdateOne = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const nim = body.nim
        const schema = {
            name: "string|optional",
            nim: "string|optional",
            class: "string|optional"
        }

        const validate = v.validate(body, schema)
        if (validate.length) {
            _status = "error",
                _message = validate,
                _data = await network_util.ResponseServiceNoData(_status, _message);
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        }

        filterById = await ormMahasiswa.ReadById(id)
        if (!filterById) {
            _status = "error", _message = "mahasiswa not found", _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_NOT_FOUND).json(_data)
        }

        if (nim) {
            const checkExistNim = await ormMahasiswa.ReadByNim(nim)
            if (checkExistNim && nim !== filterById.nim) {
                _status = "error", _message = "nim already exist", _data = await network_util.ResponseServiceNoData(_status, _message)
                return res.status(_enum.CODE_CONFLICT).json(_data)
            }
        }

        await ormMahasiswa.UpdateOne(filterById, body)

        response_orm = await ormMahasiswa.ReadById(id)

        _status = "success", _data = await network_util.ResponseServiceHasData(_status, response_orm)
        return res.status(_enum.CODE_OK).json(_data)
    } catch (error) {
        _status = "error", _message = error.message, _data = await network_util.ResponseServiceNoData(_status, _message)
        return res.status(_enum.CODE_BAD_REQUEST).json(_data)
    }

}

exports.DeleteOne = async (req, res) => {
    try {
        const id = req.params.id
        filterById = await ormMahasiswa.ReadById(id)
        if (!filterById) {
            _status = "error", _message = "mahasiswa not found", _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_NOT_FOUND).json(_data)
        }

        await ormMahasiswa.DeleteOne(filterById)
        response_orm = await ormMahasiswa.Reads()
        response_orm.sort((a, b) => {
            return a.nim - b.nim
        })
        if (response_orm.err) {
            _status = response_orm.err.status, _message = response_orm.err.message,
                _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        } else {
            _status = "success",
                _data = await network_util.ResponseServiceHasData(_status, response_orm)
            return res.status(_enum.CODE_CREATED).json(_data)
        }

    } catch (error) {

    }
}