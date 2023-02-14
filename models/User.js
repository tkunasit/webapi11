import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    userType: { type: String, enum:['Admin','User'], default: 'User' }
}, { timestamps: true})

const User = mongoose.model("User", UserSchema)

export default User;
