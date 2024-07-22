import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
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

  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);
export default User;
