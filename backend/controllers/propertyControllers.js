import { errorHandler } from "../middlewares/errorHandler.js";
import PropertySchema from "../models/propertyModel.js";

export const addProperty = async (req, res, next) => {
  const { name, type, owner, desc, images, rate, location } = req.body;

  if (!name || !type || !owner || !desc || !images || !rate || !location)
    return next(errorHandler(400, "All fields are required"));

  try {
    const newProperty = await new PropertySchema({
      ...req.body,
      owner: req.params.ownerId,
    }).save();
    res.status(201).json("Property added successfully");
  } catch (error) {
    return next(error);
  }
};
