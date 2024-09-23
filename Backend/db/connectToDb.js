import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb connected");
  } catch (error) {
    console.log("Error with ", error.message);
  }
};
export default connectToDb;
