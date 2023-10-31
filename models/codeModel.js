const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    language: {
      type: String,
    },
    code: {
      type: String,
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model('Code', codeSchema)