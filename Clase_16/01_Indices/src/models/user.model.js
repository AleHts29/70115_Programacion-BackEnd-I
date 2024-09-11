import mongoose from 'mongoose';

const userCollection = 'users';

const stringTypeRequired = {
    type: String,
    required: true
}



const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        index: true
    },
    last_name: stringTypeRequired,
    email: stringTypeRequired,
    gender: stringTypeRequired
});



export const userModel = mongoose.model(userCollection, userSchema);