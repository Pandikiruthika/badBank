const signin = require("../model/createScheme");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.Delete = async (req, res) => {
  try {
    const customer = await signin.findOneAndDelete({ customer_id: req.params.customer_id });

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    // const updatedCustomer = await signin.findOneAndDelete(
    //   { customer_id: req.params.customer_id },
    //   { $set: { balance: updatedBalance } },
    //   { new: true }
    // );

    if (customer) {
      res.send("deleted Successful");
    } else {
      res.status(500).send("delete failed");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
