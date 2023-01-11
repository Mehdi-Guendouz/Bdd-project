const messageModel = require("../models/Discussion.schema");

var router = express.Router();


router.post("/addmsg", async (req, res, next) => {
        const message = req.body;
        const data = await messageModel.create({
            message : message,
        });
        if (data) return res.json({msg : 'Message added successfully'});
        return res.json({msg : 'Failed to add message to db'});
});

router.post('/getmsg', async (req, res, next) => {
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
});