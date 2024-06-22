const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  phone: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },

  photo: { type: String, default: "NA" },
  pastExperience: { type: String, default: "NA" },
  skillSets: { type: String, default: "NA" },
  education: { type: String, default: "NA" }
});

const UserModel = mongoose.model("users", userSchema);
module.exports = { UserModel };
