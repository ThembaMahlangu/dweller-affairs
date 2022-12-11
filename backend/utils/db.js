import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connection successful");
  } catch (error) {
    console.log(error);
  }
};
