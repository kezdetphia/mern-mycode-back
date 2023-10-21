require("dotenv").config();

const express = require("express"); //require the package
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express(); //assing to a variable and assign the function to it

//MIDDLEWARE
//Built-in Express middleware allows access to the request (req) properties when a request comes in.
app.use(express.json());
//midd to see req and res
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //js wouldnt read the rest of the code without the next function
});

//Routes
app.use("/api/workouts", workoutRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to MongoDB and Server is listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


