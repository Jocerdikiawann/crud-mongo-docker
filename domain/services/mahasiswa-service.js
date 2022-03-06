const network_util = require('../../utils/network_util')
const log_util = require('../../utils/log_util')
const _enum = require('../../utils/enum_util')
const ormMahasiswa = require('../../domain/orm/orm-mahasiswa')

let _status = "",
    _message = "",
    _data = {}

exports.Reads = async (req, res) => {
    try {
        response_orm = await ormMahasiswa.Reads()
        if (response_orm.err) {
            _status = response_orm.err.status, _message = response_orm.err.message,
                _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        } else {
            _status = "success", json_data = response_orm,
                _data = await network_util.ResponseServiceHasData(_status, json_data)
            return res.status(_enum.CODE_OK).json(_data)
        }
    } catch (error) {
        console.log("error: ", error)
        _data = await network_util.ResponseServiceNoData("error", error)
        return res.status(_enum.CODE_INTERNAL_SERVER_ERROR).json(_data)
    }
}


exports.ReadById = async (req, res) => {
    try {
        const id = req.params.id
        response_orm = await ormMahasiswa.ReadById(id)
        if (response_orm.err) {
            _status = response_orm.err.status, _message = response_orm.err.message,
                _data = await network_util.ResponseServiceNoData(_status, _message)
            return res.status(_enum.CODE_BAD_REQUEST).json(_data)
        } else {
            _status = "success", json_data = response_orm,
                _data = await network_util.ResponseServiceHasData(_status, json_data)
            return res.status(_enum.CODE_OK).json(_data)
        }
    } catch (error) {
        console.log("error: ", error)
        _status = response_orm.err.status,
            _data = await network_util.ResponseServiceNoData(_status, error)
        return res.status(_enum.CODE_INTERNAL_SERVER_ERROR, _data).json(_data)
    }
}

exports.Create = async (req, res) => {

}


exports.UpdateOne = async (req, res) => {

}

exports.DeleteOne = async (req, res) => {

}