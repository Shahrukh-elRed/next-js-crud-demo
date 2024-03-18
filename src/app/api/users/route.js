import { NextResponse } from "next/server";
import { connectionString } from "../../../../util/db";
import { User } from "../../../../util/model/user";
import mongoose from "mongoose";

export const GET = async () => {
  let data = [];
  let success = true;
  let message = "users fetched successfully"
  try {
    await mongoose.connect(connectionString);
    data = await User.find();
  } catch {
    message = "Error! Something went wrong"
    success = false
  }
  return NextResponse.json({ result: data, success, message });
};

export const POST = async (request) => {
  const payload = await request.json();
  let message = "user added successfully"
  let success = true;
  try {
    await mongoose.connect(connectionString);
    let user = new User(payload);
    await user.save();
  } catch {
    message = "Error! Something went wrong";
    success = false;
  }
  return NextResponse.json({ success, message })
}