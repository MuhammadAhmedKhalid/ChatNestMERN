import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    fullName: String,
    email: String,
    age: String,
    gender: String,
    country: String,
    password: String,
})

export const User = mongoose.model('User', UserSchema);