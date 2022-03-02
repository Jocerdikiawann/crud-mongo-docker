const createMahasiswa = require('./create')
const getAllMahasiswa = require('./reads')
const getMahasiswa = require('./read')
const updateMahasiswa = require('./update')
const deletedMahasiswa = require('./delete')
module.exports = {
    createMahasiswa,
    getAllMahasiswa,
    getMahasiswa,
    updateMahasiswa,
    deletedMahasiswa
}