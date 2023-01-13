const User = require('../models/user.schema')
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user ) =>{
        if(error || !user )
            return res.redirect('/')
        next()
    })
}