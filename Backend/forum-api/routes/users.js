const Users = require("../models/user.schema ");
var express = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
var router = express.Router();


const authMiddleware = require('../middleware/authmiddleware');
const idMiddleware = require('../middleware/idmiddleware');
/* GET users listing. */

router.get('/:id/register', async function (req, res, next) {
  const User = await  Users.find()
  res.send(User);
});



router.post("/:id/register", async (req, res) => {
  const {   password,
    email,
    nomUser,
    prenomUser,
    phone,
    departement} = req.body;
    let User = await Users.findOne({ email });
    if (User) {return res.status(400).send("User already registered.");}
    else {

  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
    password:hash ,
    email:email,
    nomUser:nomUser,
    prenomUser:prenomUser,
    departement:departement,
    phone:phone,
  
    })
      .then(() => {
        res.json("USER REGISTERED");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
}});


router.post("/:id/login", async (req, res) => {
  const { email, password } = req.body;
 
  if (!email || !password) {
    return res.status(400).json({ error: 'Please enter all the details' })
}

  const User = await Users.findOne( { email: req.body.email } );

  if (!User) res.status(400).json({ error: "user Doesn't Exist" });
 
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    User.password)
    if (isPasswordValid) {
		  const token = jwt.sign(
			   {
				    id: User._id,
				email: User.email,
			    },
			      'secret123'
		)

		return res.json({ status: 'ok', User: token })
    } else {
		return res.status(400).json({ error: 'error', User: false })
	}
 


});


/*router.put('/edit', async function (req, res, next) {
  const token = req.headers['x-access-token']
  try{
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
  const newUser = await Users.updateOne({email:email} , 
    { $set:{
      password:req.body.password,
      email:req.body.email,
      nomUser:req.body.nomUser,
      prenomUser:req.body.prenomAdmin,
      phone:req.body.phone,
      departement:req.body.departement
    }
      

    }, { new: true })
  res.send(newUser)
  }
  catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}

})*/
router.put('/:id/edit', async function (req, res, next) {

  try {
    const {
      password,
      email,
      nomUser,
      prenomUser,
      phone,
      departement
    } = req.body;
  

    await Users.findOneAndUpdate(
      { email },
      { password, email, nomUser, prenomUser, phone, departement,  }
    );
    res.json({ msg: "Profile updated successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
},authMiddleware,idMiddleware),


router.delete('/:id/delete', async function (req, res, next) {
  const {_id} = req.body
  const User = await Users.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(User);

},authMiddleware,idMiddleware)

module.exports = router;
