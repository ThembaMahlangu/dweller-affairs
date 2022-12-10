import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connection successful");
  } catch (error) {
    console.log(error);
  }
};
