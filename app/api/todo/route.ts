import { Todo } from "@/models/todoSchema";
import { NextRequest, NextResponse } from "next/server";
export default async function POST(req:NextRequest){
    try {
        const body = await req.json();
        const {title, description} = body;
        await Todo.create({
            title,
            description
        })
        return NextResponse.json({message:"Todo is created!"}, {status:201})
    } catch (error:any) {
       return NextResponse.json({error:error.message}, {status:500}) 
    }
}

export async function PUT(req:NextRequest){
  try {
    const body = await req.json();
    const {title, description, id} = body;
    await Todo.findByIdAndUpdate({_id:body._id})
  } catch (error) {
    
  }

}