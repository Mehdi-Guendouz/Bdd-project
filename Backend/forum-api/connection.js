const mongoose = require ('mongoose')
mongoose.connect('mongodb+srv://BDD_Project:dsRWXZnpJZlT3Zt1@cluster0.vaehagd.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(' were connected!');
});