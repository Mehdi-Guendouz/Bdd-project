const Posts = require("../models/Post.schema");
var express = require('express');
var router = express.Router();


class APIfeatures  {
    constructor(query, queryString){
      this.query = query;
      this.queryString = queryString;
    }
  
    paginating(){
      const page = this.queryString.page * 1 || 1; 
      const limit = this.queryString.limit * 1 || 9;
      const skip = (page -1) * limit; 
      this.query = this.query.skip(skip).limit(limit);
      return this;
    }
  }
router.post ("/register", async (req, res) => {
    try {
      const { description, image } = req.body;

      if (image.length === 0) {
        return res.status(400).json({ msg: "Please add photo(s)" });
      }

      const newPost = new Posts({
        description,
        image,
        user: req.user._id,
      });
      await newPost.save();

      res.json({ 
        msg: "Post created successfully.", 
        newPost: {
          ...newPost._doc,
          user: req.user
        } 
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }),
 


  module.exports = router;
