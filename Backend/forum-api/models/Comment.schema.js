const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const CommentSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
    content: {
        type: String,
        required: true,
      },
          isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'user',
    match : {isVisible:true}

},
]
CommentSchema.pre('find',findVisible(population))
CommentSchema.pre('findOne',findVisible(population))
CommentSchema.pre('findOneAndUpdate',findVisible(population))
CommentSchema.pre('count',findVisible(population))
CommentSchema.pre('countDocuments',findVisible(population))


const Comment = mongoose.model('Comments', CommentSchema, 'Comments')
module.exports = Comment