const User = require('../models/user.schema ')
module.exports = (req, res, next) => {
    const user = User.findById(req.session.userId, (error, user ) =>{
        if(error || !user )
            return res.redirect('/')
        next()
    })
    if (user.admin != req.params.id){
        next(createError(404));
    }
}