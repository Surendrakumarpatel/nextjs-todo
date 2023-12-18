import { connect } from "@/database/dbconnection";
import { Todo } from "@/models/todoSchema";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST({params:{id}}:any, req:NextRequest){
try {
    console.log(id);
    const body = await req.json();
    const {title, description, isCompleted} = body;
    let todo = await Todo.findById(id);
    if(!todo){
        return NextResponse.json({
            message:"Todo not found!",
            success:false,
        }, {status:404})
    };
    todo.title = title;
    todo.description = description;
    todo.isCompleted = isCompleted;
    await todo.save();

    return NextResponse.json({
        message:"Todo updated successfully!",
        success:true,
    }, {status:200});
} catch (error:any) {
    return NextResponse.json({
        error:error.message
    })
}
}