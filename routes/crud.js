var express = require('express');
var router = express.Router();

const controllerMahasiswa = require('../controller')

router.post('/addMahasiswa', controllerMahasiswa.createMahasiswa)
router.get('/mahasiswa', controllerMahasiswa.getAllMahasiswa)
router.get('/mahasiswa/:nim', controllerMahasiswa.getMahasiswa)
router.put('/mahasiswa/:id', controllerMahasiswa.updateMahasiswa)
router.delete('/mahasiswa/:id', controllerMahasiswa.deletedMahasiswa)

module.exports = router;