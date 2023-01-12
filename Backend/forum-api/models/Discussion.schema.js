const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')
const findVisible = require ('../findVisible');

const DiscussionSchema = new mongoose.Schema(
    {
        message : {
            text : {
                type :String, 
                required : true,
            },
        },
            users : Array,
            sender : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User',
                required : true,
            },
    },
    {
            timestamps : true,
    }
);

const population = [{
    path :'admin',
    match : {isVisible:true}

},
{
    path:'listemembres',
    match :{isVisible:true}
}]
 

const Discussion = mongoose.model('Discussions', DiscussionSchema, 'Discussion')
module.exports = Discussion