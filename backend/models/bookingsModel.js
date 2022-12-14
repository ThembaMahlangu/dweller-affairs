import mongoose, { Mongoose } from "mongoose";

const BookingSchema = mongoose.Schema(
  {
    // c before the keys means client
    cname: {
      type: String,
      required: true,
      unique: true,
    },
    cemail: {
      type: String,
      required: true,
    },
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    building: {
      type: String,
      required: true,
    },
    cWhatsappNum: {
      type: String,
      required: true,
    },
    cContactNum: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("booking", BookingSchema);
