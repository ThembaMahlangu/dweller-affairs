import mongoose from "mongoose";

const PropertySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
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
  images: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("property", PropertySchema);
