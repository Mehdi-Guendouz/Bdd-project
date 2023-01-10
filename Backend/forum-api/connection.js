const mongoose = require ('mongoose')
mongoose.connect('mongodb+srv://BDDProject:35100702@cluster0.jkldiwy.mongodb.net/test',{useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(' were connected!');
});