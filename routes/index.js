const log_util = require('../utils/log_util')
const express = require('express')
const router = express.Router()
const mahasiswa = require('../domain/services/mahasiswa-service')

console.log('[[MAHASISWA]]')
log_util.LogInfo('[GET]=/mahasiswa/')
log_util.LogInfo('[GET]=/mahasiswa/:id')
log_util.LogSuccess('[POST]=/mahasiswa/')
log_util.LogWarning('[PUT]=/mahasiswa/:id')
log_util.LogDanger('[DELETE]=/mahasiswa/:id')

router.get('/mahasiswa', mahasiswa.Reads)
router.get('/mahasiswa/:id', mahasiswa.ReadById)
router.post('/mahasiswa', mahasiswa.Create)
router.put('/mahasiswa/:id', mahasiswa.UpdateOne)
router.delete('/mahasiswa/:id', mahasiswa.DeleteOne)

module.exports = router