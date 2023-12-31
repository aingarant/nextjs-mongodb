import mongoose from "mongoose"

const userSchema =  new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },

},   { timestamps: true })


export const User = mongoose.models.User || mongoose.model("User", userSchema)