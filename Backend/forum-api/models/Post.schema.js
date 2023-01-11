const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')
const findVisible = require ('../findVisible');


const PostSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:'Users'},
    description : {type : String},
    image :{type :String},
    nbrlikes :{type:Number},
    isVisible: {type: Boolean, default : true},
    comments: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Comments",
        },
      ],
    createdAt:{type:Date}

})

const population = [{
    path :'user',
    match : {isVisible:true}

},

    {
        path:'Comments',
        match : {isVisible:true}
    }
]


PostShema.pre('find',findVisible(population))
PostShema.pre('findOne',findVisible(population))
PostShema.pre('findOneAndUpdate',findVisible(population))
PostShema.pre('count',findVisible(population))
PostShema.pre('countDocuments',findVisible(population))


 

const Post = mongoose.model('Posts', PostSchema, 'Posts')
module.exports = Post