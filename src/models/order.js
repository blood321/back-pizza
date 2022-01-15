const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    client: {
      type: Schema.ObjectId, 
    	ref: 'client',
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    desc: {
      type: String,
      maxLenght: 255,
      required: true
    },
},
  { timestamps: true }
);

module.exports = mongoose.models.Order || mongoose.model("order", OrderSchema);
