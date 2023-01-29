import mongoose from "mongoose";
const { Schema } = mongoose;

const DivsectSchema = new mongoose.Schema(
  {
    divsect_name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    district: [
      {
        type: String,
        default: "",
      },
    ],
    province: {
      type: String,
      required: true,
    },
    phoneno: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Divsect", DivsectSchema);
