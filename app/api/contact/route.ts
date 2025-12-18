// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; 
import Contact from "@/models/contact"; 
import nodemailer from 'nodemailer'; 

// --- Nodemailer Transporter Setup ---
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // Use SSL/TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});


const NOTIFICATION_EMAIL = "sharmaprince7248@gmail.com"; 

export async function POST(req: NextRequest) {
    let savedData = null; 

    try {
        await connectDB();

        const { name, email, phone, subject, message } = await req.json();

        // 1. --- Server-side Validation ---
        if (!name || name.trim().length < 3) {
            return NextResponse.json(
                { message: "Full Name must be at least 3 characters long." },
                { status: 400 }
            );
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
        }
        const phoneRegex = /^[\+0-9\-\(\)\s]{8,20}$/;
        if (!phoneRegex.test(phone)) {
            return NextResponse.json({ message: "Invalid phone number format." }, { status: 400 });
        }

        // 2. --- Save to Database ---
        try {
            savedData = await Contact.create({
                name,
                email,
                phone,
                subject,
                message,
            });
            console.log("Database save successful.");
        } catch (dbError) {
            console.error("MongoDB Save Error:", dbError);
        }

        // 3. --- Send Email Notification ---
        const mailOptions = {
            from: process.env.MAIL_FROM, 
            
            // --- UPDATED: ONLY YOUR SPECIFIED EMAIL RECEIVES THE NOTIFICATION ---
            to: NOTIFICATION_EMAIL, 
            // ------------------------------------------------------------------

            subject: `NEW Lead: ${subject} from ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px; background: #f9f9f9;">
                    <h2 style="color: #333;">New Contact Submission</h2>
                    <p>A new lead has been received at <strong>${new Date().toLocaleString()}</strong>.</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>
                        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${subject}</td></tr>
                    </table>
                    <h3 style="color: #555; margin-top: 20px;">Message:</h3>
                    <p style="white-space: pre-wrap; background: #fff; padding: 10px; border: 1px solid #eee; border-radius: 4px;">${message}</p>
                    ${savedData ? '<p style="margin-top: 20px; color: green;">Database Status: Saved Successfully.</p>' : '<p style="margin-top: 20px; color: orange;">Database Status: Failed to save (check server logs).</p>'}
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Notification email successfully sent to:", NOTIFICATION_EMAIL);

        // 4. --- Success Response ---
        return NextResponse.json(
            {
                message: "Message sent, saved, and notification email dispatched successfully!",
                data: savedData, 
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("❌ Fatal Error in Contact API:", error);
        
        return NextResponse.json(
            { message: "Internal server error: Could not process request or send email." },
            { status: 500 }
        );
    }
}
