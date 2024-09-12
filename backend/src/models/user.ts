import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {type: String, enum:["student", "instructor"], default: "student"}
})

export const User = model('User', userSchema);