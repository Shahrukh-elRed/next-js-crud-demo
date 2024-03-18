import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String
});

export const User = mongoose.models.users || mongoose.model("users", userModel);
