import { connectionString } from "../../../../../util/db";
import { User } from "../../../../../util/model/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (request, content) => {
  const { userId } = content.params;
  const record = { _id: userId };
  let data = {};
  let success = true;
  let message = "user found";
  try {
    await mongoose.connect(connectionString);
    data = await User.findById(record);
  } catch {
    message = "Error! Something went wrong";
    success = false;
  }
  return NextResponse.json({ result: data, success, message });
};
