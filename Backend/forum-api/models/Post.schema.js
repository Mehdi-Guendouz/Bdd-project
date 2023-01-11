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

PostShema.pre('find',findVisible(population))
PostShema.pre('findOne',findVisible(population))
PostShema.pre('findOneAndUpdate',findVisible(population))
PostShema.pre('count',findVisible(population))
PostShema.pre('countDocuments',findVisible(population))

CompanySchema.plugin(deepPopulate)
 

const Post = mongoose.model('Posts', PostSchema, 'Posts')
module.exports = Post