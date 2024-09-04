import mongoose from "mongoose";

const userCollection = 'usuarios';


const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: [true, "email es requerido"]
    },
    age: Number
},
    {
        versionKey: false // Deshabilita el parametro `__v`
    }
)

export const userModel = mongoose.model(userCollection, userSchema)

