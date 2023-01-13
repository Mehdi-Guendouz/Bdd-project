const messageModel = require('../models/Discussion.schema')
var express = require('express');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
var router = express.Router();


const authMiddleware = require('../middleware/authmiddleware');
const idMiddleware = require('../middleware/idmiddleware');

router.post("/:id/addmsg", async (req, res, next) => {
  try{
    const{from,to,message} = req.body;
    const data = await messageModel.create({
        message : { text : message},
        users : [from, to],
        sender : from,
    });
    if (data) return res.json({msg : 'Message added successfully'});
    return res.json({msg : 'Failed to add message to db'});
  }catch (ex){
      next(ex);
  }
},idMiddleware,authMiddleware);

router.post("/:id/getmsg", async (req, res, next) => {
  try{
    const { from, to } = req.body;
    const messages = await messageModel.find({
        users : {
            $all : [from, to],
        },
    })
    .sort({updated : 1});
    const projectMessages = messages.map((msg)=>{
        return {
            fromSelf : msg.sender.toString() === from,
            message : msg.message.text,
        };
    });
    res.json(projectMessages); 
} catch (ex) {
    next(ex);
}
},idMiddleware,authMiddleware);

module.exports = router;