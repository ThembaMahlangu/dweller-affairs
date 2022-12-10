import PartnerSchema from "../models/partnerModel.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email | !password)
    return next(errorHandler(400, "some fields are required"));

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    let newPartner = await PartnerSchema.findOne({ email });
    if (newPartner) return next(errorHandler(409, "Email already used"));
    newPartner = await PartnerSchema.findOne({ name });
    if (newPartner) return next(errorHandler(409, "Partner already exists"));

    newPartner = new PartnerSchema({ ...req.body, password: hash });
    res
      .status(201)
      .json(
        "A verification link has been sent to you, please click on the link to verify your account"
      );
  } catch (error) {
    return next(error);
  }
};
