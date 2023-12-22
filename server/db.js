const mongoose = require("mongoose");

// Access your MongoDB connection string from secrets
const mongoURI =
  process.env.MONGODB ??
  "mongodb+srv://neoGStudent:n1g8Vc3rpTCnoz1s@rucha-neog.kor0joq.mongodb.net/?retryWrites=true&w=majority";
console.log(mongoURI);
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
