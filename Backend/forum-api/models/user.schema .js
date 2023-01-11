const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate');
const findVisible = require ('../findVisible');
const UserSchema = new mongoose.Schema({

    admin :{type: mongoose.Schema.Types.ObjectId, ref:'Admins'},
    nomUser : {type : String},
    prenomUser :{type :String} ,
    email :{type :String},
    phone:{type : Number},
    departement : {type :String} ,
    password:{type :String},
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'admin',
    match : {isVisible:true}

}]

UserSchema.pre('find',findVisible(population))
UserSchema.pre('findOne',findVisible(population))
UserSchema.pre('findOneAndUpdate',findVisible(population))
UserSchema.pre('count',findVisible(population))
UserSchema.pre('countDocuments',findVisible(population))

 

const User= mongoose.model('Users', UserSchema, 'Users')
module.exports = User