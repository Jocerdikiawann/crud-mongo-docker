var express = require('express');
var router = express.Router();

const controllerMahasiswa = require('../controller')

router.post('/addMahasiswa', controllerMahasiswa.createMahasiswa)
router.get('/mahasiswa', controllerMahasiswa.getAllMahasiswa)
router.get('/mahasiswa/:nim', controllerMahasiswa.getMahasiswa)
// router.put()
// router.delete()

module.exports = router;