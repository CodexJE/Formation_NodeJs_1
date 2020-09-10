const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumbers: [
    {
      number: String,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
