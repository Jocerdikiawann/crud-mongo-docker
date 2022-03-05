const network_util = require('../../utils/network_util')
const log_util = require('../../utils/log_util')
const _enum = require('../../utils/enum_util')
const ormMahasiswa = require('../../domain/orm')

exports.Reads = async (req, res) => {
    let status = "",
        message = "",
        data = {}
    try {
        response_orm = await ormMahasiswa.Reads()
        if (response_orm.err) {
            status = response_orm.err.status
            message = response_orm.err.message
            data = await network_util.ResponseServiceNoData(status, message)
            return res.status(_enum.CODE_BAD_REQUEST).json(data)
        } else {
            status = "success"
            json_data = response_orm
            data = await network_util.ResponseServiceHasData(status, json_data)
            return res.status(_enum.CODE_OK).json(data)
        }
    } catch (error) {
        console.log("error: ", error)
        data = await network_util.ResponseServiceNoData("error", error)
        return res.status(_enum.CODE_INTERNAL_SERVER_ERROR).json(data)
    }
}


exports.ReadById = async (req, res) => {

}

exports.Create = async (req, res) => {

}


exports.UpdateOne = async (req, res) => {

}

exports.DeleteOne = async (req, res) => {

}