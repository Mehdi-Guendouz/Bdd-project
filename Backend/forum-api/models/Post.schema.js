const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const PostSchema = new mongoose.Schema({
    idPost: {type :Number},
    user:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
    description : {type : String},
    datePublication : {type : Date},
    image :{type :String},
    nbrlikes :{type:Number},
    isVisible: {type: Boolean, default : true},
    createdAt:{type:Date}

})

const population = [{
    path :'user',
    match : {isVisible:true}

}]

TopicsSchema.pre('find',findVisible(population))
TopicsSchema.pre('findOne',findVisible(population))
TopicsSchema.pre('findOneAndUpdate',findVisible(population))
TopicsSchema.pre('count',findVisible(population))
TopicsSchema.pre('countDocuments',findVisible(population))

CompanySchema.plugin(deepPopulate)
 

const Post = mongoose.model('Posts', PostSchema, 'Posts')
module.exports = Post