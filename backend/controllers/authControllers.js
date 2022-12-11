import PartnerSchema from "../models/partnerModel.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase();

  if (!name || !email | !password)
    return next(errorHandler(400, "some fields are required"));
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    let newPartner = await PartnerSchema.findOne({ email });
    if (newPartner) return next(errorHandler(409, "Email already used"));
    newPartner = await PartnerSchema.findOne({ name });
    if (newPartner) return next(errorHandler(409, "Partner already exists"));
    newPartner = await new PartnerSchema({
      ...req.body,
      password: hash,
    }).save();
    const token = jwt.sign({ id: newPartner._id }, process.env.EMAIL_CON_KEY, {
      expiresIn: "1h",
    });
    const url = `${process.env.BASE_URL}/api/auth/${newPartner._id}/verify/${token}`;
    sendEmail(email, "verifyEmail", url);
    res
      .status(201)
      .json(
        "A verification link has been sent to you, please click on the link to verify your account"
      );
  } catch (error) {
    return next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    const partner = await PartnerSchema.findById(req.params.partnerId);
    if (!partner) return next(errorHandler(401, "Invalid user"));

    const verifyToken = jwt.verify(
      req.params.token,
      process.env.EMAIL_CON_KEY,
      (error, response) => {
        if (error) return next(errorHandler(401, "Token has expired"));

        if (response.id !== req.params.partnerId)
          return next(errorHandler(403, "Invalid token"));
      }
    );

    const verify = await PartnerSchema.findByIdAndUpdate(
      req.params.partnerId,
      {
        $set: { emailVerified: true },
      },
      { new: true }
    );

    res.status(200).json("Email verified successfully");
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  let { email } = req.body;
  email = email.toLowerCase();
  try {
    if (!email || !req.body.password)
      return next(errorHandler(400, "All fields are required"));
    const partner = await PartnerSchema.findOne({ email });
    if (!partner) return next(errorHandler(400, "Partner not found"));
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      partner.password
    );
    if (!isPasswordCorrect) return next(errorHandler(400, "Wrong password"));
    if (!partner.emailVerified) {
      const token = jwt.sign({ id: partner._id }, process.env.EMAIL_CON_KEY, {
        expiresIn: "1h",
      });
      const url = `${process.env.BASE_URL}/api/auth/${partner._id}/verify/${token}`;
      sendEmail(email, "verifyEmail", url);
      return res
        .status(200)
        .json(
          "A verification link has been sent to you, please click on the link to verify your account"
        );
    }
    const jwtToken = jwt.sign(
      { id: partner.id, email: partner.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password, ...others } = partner._doc;

    res
      .cookie("accessToken", jwtToken, { httpOnly: true })
      .status(200)
      .json(others);
  } catch (error) {
    return next(error);
  }
};
