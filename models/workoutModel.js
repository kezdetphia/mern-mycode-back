const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define the schema
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    user_id: {
      typer: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

//create a model using the schema we created
module.exports = mongoose.model("Workout", workoutSchema);
