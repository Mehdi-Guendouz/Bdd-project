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

CommentShema.pre('find',findVisible(population))
CommentShema.pre('findOne',findVisible(population))
CommentShema.pre('findOneAndUpdate',findVisible(population))
CommentShema.pre('count',findVisible(population))
CommentShema.pre('countDocuments',findVisible(population))


const Comment = mongoose.model('Comments', CommentSchema, 'Comments')
module.exports = Comment