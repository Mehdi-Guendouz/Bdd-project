const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const DiscussionSchema = new mongoose.Schema({
    idDiscussion: {type :Number},
    listemembres:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
    admin :{type: mongoose.Schema.Types.ObjectId, ref:'Admins'},
    titre : {type : String},
    image : {type : String},
    message :{type :String},
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'admin',
    match : {isVisible:true}

},
{
    path:'listemembres',
    match :{isVisible:true}
}]

TopicsSchema.pre('find',findVisible(population))
TopicsSchema.pre('findOne',findVisible(population))
TopicsSchema.pre('findOneAndUpdate',findVisible(population))
TopicsSchema.pre('count',findVisible(population))
TopicsSchema.pre('countDocuments',findVisible(population))

CompanySchema.plugin(deepPopulate)
 

const Discussion = mongoose.model('Discussions', DiscussionSchema, 'Discussion')
module.exports = Discussion