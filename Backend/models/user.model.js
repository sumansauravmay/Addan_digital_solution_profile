const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  phone: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },

  photo: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  pastExperience: { type: String, default: "NA" },
  skillSets: { type: String, default: "NA" },
  education: { type: String, default: "NA" },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = { UserModel };
