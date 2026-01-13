import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    email: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
  },
  { 
    timestamps: true // Adds createdAt and updatedAt fields automatically
  }
);

// Check if the model already exists before defining it, 
// which is crucial for Next.js/Serverless environment.
export default mongoose.models.Newsletter ||
  mongoose.model("Newsletter", newsletterSchema);

