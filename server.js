require("dotenv").config();

const express = require("express"); //require the package
const mongoose = require("mongoose");
const cors = require("cors");

const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/users");

const userRoutes = require("./routes/codes");


//express app
const app = express(); //assing to a variable and assign the function to it

//MIDDLEWARE
app.use(cors());
//Built-in Express middleware allows access to the request (req) properties when a request comes in.
app.use(express.json());
//midd to see req and res
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //js wouldnt read the rest of the code without the next function
});

//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

app.use('/api/code', codeRoutes)

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


