const User = require('../model/user.model')
const bcrypt = require("bcryptjs");


exports.register = async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const { email } = req.body
        const oldUser = await User.findOne({ email: req.body.email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
          }       
        const user = await User.create({
            email: req.body.email,
            name: req.body.name,
            password: hashedPassword,
            username: req.body.username,
          }); 
          // Validate user input
          if (!user) {
            res.status(400).send("All input is required");
          }
          await user.save();
          res.status(201).send({ sucess: true, data: user });
      }catch(e){
            console.error(e);
            return res.status(200).send({
                error:true,
                code:500,
                msg:"user not created",
                Response:[]
            })
}
}

exports.login = async(req, res) => {
    try{
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
  
      const validPassword = await bcrypt.compare(req.body.password, user.password)
      !validPassword && res.status(400).json("wrong password")
  
      res.status(200).json(user)
    }catch(e){
            console.error(e);
            return res.status(200).send({
                error:true,
                code:500,
                msg:"user not created",
                Response:[]
            })
        }
}