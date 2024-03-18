import { NextResponse } from "next/server";
import { connectionString } from "../../../../util/db";
import { User } from "../../../../util/model/user";
import mongoose from "mongoose";

export const GET = async () => {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionString);
    data = await User.find();
  } catch {
    data = { message: "Error! Something went wrong" }
    success = false
  }
  return NextResponse.json({ result: data, success });
};
