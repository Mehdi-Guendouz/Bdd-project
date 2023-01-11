const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')


const TaskSchema = new mongoose.Schema({
    idTask: {type :Number},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
    admin :{type: mongoose.Schema.Types.ObjectId, ref:'Admins'},
    description : {type : String},
    datePublication : {type : Date},
    duree :{type :String},
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'user',
    match : {isVisible:true}

},
{
    path:'admin',
    match :{isVisible:true}
}]

TaskShema.pre('find',findVisible(population))
TaskShema.pre('findOne',findVisible(population))
TaskShema.pre('findOneAndUpdate',findVisible(population))
TaskShema.pre('count',findVisible(population))
TaskShema.pre('countDocuments',findVisible(population))

CompanySchema.plugin(deepPopulate)
 

const Task = mongoose.model('Tasks', TaskSchema, 'Tasks')
module.exports = Task