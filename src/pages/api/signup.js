import connectDb from "middleware/mongoose";
import User from "models/User";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { name, email } = req.body;
    let u = new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString(),
    });
    await u.save();

    res.status(200).json([{ sucess: "success" }]);
  } else {
    res.status(404).json({ error: "this method is not allowed" });
  }
};
// Completed

export default connectDb(handler);
