const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Mahasiswa = new Schema({
    name:{
        type:String,
        required:true,
    },
    nim:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model('mahasiswa',Mahasiswa)