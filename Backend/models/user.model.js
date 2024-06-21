const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  phone: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },

  photo: { type: String },
  pastExperience: { type: String },
  skillSets: { type: String },
  education: { type: String }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = { UserModel };
