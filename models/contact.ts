import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    subject: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
  },
  { 
    timestamps: true // Adds createdAt and updatedAt fields automatically
  }
);

// Check if the model already exists before defining it, 
// which is crucial for Next.js/Serverless environment.
export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);