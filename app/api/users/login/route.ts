import { connect } from "@/database/dbconnection";
import { User } from "@/models/userSchema";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        // check if user exist or not
        let user = await User.findOne({ email });
        if (!user)
            return NextResponse.json({
                message: "Invalid email or password",
                success: false,
            }, { status: 400 })
        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if (!isPasswordMatch)
            return NextResponse.json({
                message: "Invalid email or password",
                success: false,
            }, { status: 400 })

        // create token

        const tokenData = {
            id: user._id,
            email: user.email,
            name:user.name,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

        const res = NextResponse.json({
            message: `Welcome back ${user.name}`,
            success: true,
        }, { status: 200 })


        res.cookies.set("token", token, { httpOnly: true });
        return res;

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        })
    }
}