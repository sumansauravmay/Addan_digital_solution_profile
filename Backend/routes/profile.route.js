const express = require("express");
const { authenticate }=require("../middlewares/user.middlewares");
const { UserModel } = require("../models/user.model");


const profileRouter = express.Router();


profileRouter.get('/profile', authenticate, async (req, res) => {

  try {
    const user = await UserModel.findById( req.userId).select('-password');
    console.log("user", user)
     res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});


module.exports={profileRouter};

