const mongoose = require ('mongoose');
const deepPopulate = require ('mongoose-deep-populate')

const DiscussionSchema = new mongoose.Schema(
    { message : String}
);



const Discussion = mongoose.model('Discussions', DiscussionSchema, 'Discussion')
module.exports = Discussion