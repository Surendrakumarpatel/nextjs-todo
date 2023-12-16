import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
export function GET(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value || "" ;
        
        const decode = jwt.verify(token, process.env.TOKEN_SECRET!);
       
        const {name}:any = decode;
        const res = NextResponse.json({
            message: `👋 bye bye ${name}`,
            success: true
        }, { status: 200 })
        res.cookies.set("token", "", { httpOnly:true, expires: new Date(0) });
        return res;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}