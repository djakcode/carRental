import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Base de données connectée")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/carRental`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
