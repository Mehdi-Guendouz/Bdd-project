const Admins = require("../models/admin.schema");
const messageModel = require('../models/Discussion.schema')
var express = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
var router = express.Router();


router.get('/register', async function (req, res, next) {
  const admin = await  Admins.find()
  res.send(admin);
});



router.post("/register", async (req, res) => {
  const {   password,
    email,
    nomAdmin,
    prenomAdmin,
    dateofbirth,
    phone,
    country,
    typeCompany,
    nomCompany,
    nbrDepartments,
    } = req.body;
    let admin = await Admins.findOne({ email });
    if (admin) {return res.status(400).send("User already registered.");}
    else {

  bcrypt.hash(password, 10).then((hash) => {
    Admins.create({
    password:hash ,
    email:email,
    nomAdmin:nomAdmin,
    prenomAdmin:prenomAdmin,
    dateofbirth:dateofbirth,
    phone:phone,
    country:country,
    typeCompany:typeCompany,
    nomCompany:nomCompany,
    nbrDepartments:nbrDepartments,

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
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
  if (!email || !password) {
    return res.status(400).json({ error: 'Please enter all the details' })
}

  const admin = await Admins.findOne( { email: req.body.email } );

  if (!admin) res.status(400).json({ error: "admin Doesn't Exist" });
 
  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    admin.password)
    if (isPasswordValid) {
		  const token = jwt.sign(
			   {
				    id: admin._id,
				email: admin.email,
			    },
			      'secret123'
		)

		return res.json({ status: 'ok', user: token })
    } else {
		return res.status(400).json({ error: 'error', user: false })
	}
 


});
/*router.put('/edit', async function (req, res, next) {
  const token = req.headers['x-access-token']
  try{
    const decoded = jwt.verify(token, 'secret123')
    const email = decoded.email
  const newAdmin = await Admins.updateOne({email:email} , 
    { $set:{
      password:req.body.password,
      /*email:req.body.email,
      nomAdmin:req.body.nomAdmin,
      prenomAdmin:req.body.prenomAdmin,
      dateofbirth:req.body.dateofbirth,
      phone:req.body.phone,
      country:req.body.country,
      typeCompany:req.body.typeCompany,
      nomCompany:req.body.nomCompany,
      nbrDepartments:req.body.nbrDepartments,
      nbrEmployees:req.body.nbrEmployees
    }
      

    }, { new: true })
  res.send(newAdmin)
  }
  catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}

})
*/
router.put('/edit', async function (req, res, next) {

  try {
    const {
      password,
      email,
      nomAdmin,
      prenomAdmin,
      dateofbirth,
      phone,
      country,
      typeCompany,
      nomCompany,
    } = req.body;
  

    await Admins.findOneAndUpdate(
      { email },
      { password, email, nomAdmin, prenomAdmin, phone, dateofbirth, country,nomCompany,typeCompany }
    );
    res.json({ msg: "Profile updated successfully." });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}),
router.delete('/delete', async function (req, res, next) {
  const {_id} = req.body
  const Admin = await Admins.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(Admin);

})
module.exports = router;
