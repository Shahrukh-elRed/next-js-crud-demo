import { NextResponse } from "next/server";
import { connectionString } from "../../../../util/db";
import { User } from "../../../../util/model/user";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";
export const GET = async () => {
  let data = [];
  let success = true;
  let message = "users fetched successfully";
  try {
    await mongoose.connect(connectionString);
    data = await User.find();
  } catch {
    message = "Error! Something went wrong";
    success = false;
  }
  return NextResponse.json({ result: data, success, message });
};
