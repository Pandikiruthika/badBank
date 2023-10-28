const signin = require("../model/createScheme");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.UpdateWithdraw = async (req, res) => {
  try {
    const customer = await signin.findOne({ customer_id: req.params.customer_id });

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    const updatedBalance = customer.balance - req.body.data.withdraw;

    const updatedCustomer = await signin.findOneAndUpdate(
      { customer_id: req.params.customer_id },
      { $set: { balance: updatedBalance } },
      { new: true }
    );

    if (updatedCustomer) {
      res.send("Update Successful");
    } else {
      res.status(500).send("Update failed");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
