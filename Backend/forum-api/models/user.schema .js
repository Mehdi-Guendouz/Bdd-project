const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const UserSchema = new mongoose.Schema({
    username: {type :Number},
    admin :{type: mongoose.Schema.Types.ObjectId, ref:'Admins'},
    nomUser : {type : String},
    prenomUser :{type :String} ,
    email :{type :String},
    phone:{type : Number},
    password:{type :String},
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'admin',
    match : {isVisible:true}

}]

TopicsSchema.pre('find',findVisible(population))
TopicsSchema.pre('findOne',findVisible(population))
TopicsSchema.pre('findOneAndUpdate',findVisible(population))
TopicsSchema.pre('count',findVisible(population))
TopicsSchema.pre('countDocuments',findVisible(population))

CompanySchema.plugin(deepPopulate)
 

const User= mongoose.model('Users', UserSchema, 'Users')
module.exports = User