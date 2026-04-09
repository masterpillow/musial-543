import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({
      ok: true,
      readyState: mongoose.connection.readyState,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to connect to MongoDB";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
