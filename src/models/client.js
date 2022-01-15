const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    phone: {
      type: Number,
      required: true,
      maxlength: 20,      
    },
    address: {
      type: String,
      required: true,
      maxlength: 60,      
    }
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Client || mongoose.model("client", ClientSchema);
