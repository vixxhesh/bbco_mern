import mongoose from "mongoose";

const userSchema = new mongoose.Schema({});

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
