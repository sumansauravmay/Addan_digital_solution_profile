const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  repassword: { type: String, required: true },
  otp: { type: Number, required: true }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = { UserModel };

