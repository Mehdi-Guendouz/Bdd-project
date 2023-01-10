const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const AdminSchema = new mongoose.Schema({
    nomAdmin : {type : String},
    prenomAdmin : {type : String},
    email :{type :String ,unique: true } ,
    password :{type :String},
    dateofbirth :{type:String},
    phone:{type: Number},
    country :{type:String},
    typeCompany : {type : String},
    nomCompany : {type : String},   
    nbrDepartments :{type :Number} ,
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date},
    token:{
        type:String
    }

})


const population = []

const Admin = mongoose.model('Admins', AdminSchema, 'Admins')
module.exports = Admin