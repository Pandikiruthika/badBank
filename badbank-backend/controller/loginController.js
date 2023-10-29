const signin = require("../model/createScheme");
const bcrypt = require("bcrypt");

exports.loginpage = async (req, res) => {
    try {
        console.log(req.body);
        var email = req.body.data.email;
        var password = req.body.data.password;

        var foundUser = await signin.findOne({ email: email });
        if (foundUser) {
            bcrypt.compare(password, foundUser.password, (err, result) => {
                if (result === true) {
                    res.json({message:"Welcome",customer_id:foundUser.customer_id}); 
                } else {
                    res.json({message:"Invalid password"});
                }
            });
        } else {
            res.json({message:"User not found"});
        }
    } catch (error) {
        res.send(error);
    }
};
