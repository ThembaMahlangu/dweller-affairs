import {
  placeBooking,
  getBookings,
} from "../controllers/bookingControllers.js";
import express from "express";

const router = express.Router();

router.post("/placebooking/:partnerId", placeBooking);
router.get("/partnerbookings/:partnerId", getBookings);

export default router;
