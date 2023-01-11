const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const CommentSchema = new mongoose.Schema({
    idComment: {type :Number},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
    post : {type: mongoose.Schema.Types.ObjectId, ref:'Posts'},
    dateComment : {type : Date},
    Description :{type: String},
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'user',
    match : {isVisible:true}

},
{
    path :'post',
    match : {isVisible:true}
}]

TopicsSchema.pre('find',findVisible(population))
TopicsSchema.pre('findOne',findVisible(population))
TopicsSchema.pre('findOneAndUpdate',findVisible(population))
TopicsSchema.pre('count',findVisible(population))
TopicsSchema.pre('countDocuments',findVisible(population))

CompanySchema.plugin(deepPopulate)
 

const Comment = mongoose.model('Comments', CommentSchema, 'Comments')
module.exports = Comment