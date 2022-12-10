import mongoose from "mongoose";

const PropertySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  rate: {
    type: Number,
  },
});

export default mongoose.model("property", PropertySchema);
