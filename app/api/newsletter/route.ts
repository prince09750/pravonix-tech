import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; 
import Newsletter from "@/models/newsletter";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Save to database (or update if already exists)
    try {
      await Newsletter.findOneAndUpdate(
        { email: email.toLowerCase().trim() },
        { email: email.toLowerCase().trim() },
        { upsert: true, new: true }
      );
      console.log("Newsletter subscription saved:", email);
    } catch (dbError: any) {
      // If it's a duplicate key error, that's okay - user is already subscribed
      if (dbError.code === 11000) {
        console.log("Email already subscribed:", email);
        return NextResponse.json(
          { message: "This email is already subscribed!" },
          { status: 200 }
        );
      }
      console.error("Database error:", dbError);
      throw dbError;
    }

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
