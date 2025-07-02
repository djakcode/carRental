import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.json({
      success: false,
      message: "Vous n'avez pas cette autorisation",
    });

  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET);

    if (!userId)
      return res.json({
        success: false,
        message: "Vous n'avez pas cette authorisation",
      });

    req.user = await User.findById(userId).select("-password");
    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Vous n'avez pas cette authorisation",
    });
  }
};
