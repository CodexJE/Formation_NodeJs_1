const mongoose = require("mongoose");
const carSchema = mongoose.Schema({
  name: String,
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
  },
});

module.exports = mongoose.model("Car", carSchema);
