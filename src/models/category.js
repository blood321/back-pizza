const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Category || mongoose.model("category", CategorySchema);
