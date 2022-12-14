import BookingSchema from "../models/bookingsModel.js";
import { errorHandler } from "../middlewares/errorHandler.js";

export const placeBooking = async (req, res, next) => {
  const { cname, cemail, partner, building, cWhatsappNum, cContactNum } =
    req.body;

  try {
    if (!cname || !cemail || !building || !cWhatsappNum || !cContactNum)
      return next(errorHandler(400, "All fields are required"));

    const newBooking = await new BookingSchema({
      ...req.body,
      partner: req.params.partnerId,
    }).save();
    res.status(200).json("Booking placed successfully");
  } catch (error) {
    return next(error);
  }
};

export const getBookings = async (req, res, next) => {
  try {
    const bookings = await BookingSchema.find({
      partner: req.params.partnerId,
    });
    if (bookings.length === 0) return res.status(200).json("No Booking found");
    res.status(200).json(bookings);
  } catch (error) {
    return next(error);
  }
};
