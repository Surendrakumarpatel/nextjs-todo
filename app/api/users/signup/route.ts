import { connect } from "@/database/dbconnection";
import { User } from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

connect();

export default async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        // check if user exist or not
        let user = await User.findOne({ email });
        if (user)
            return NextResponse.json({
                message: "Already used email! please try different",
                success: false,
            }, { status: 400 })

        const hashedPassword = await bcryptjs.hash(password, 10);
        user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return NextResponse.json({
            message: "Account created successfully!",
            success: true,
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }
}