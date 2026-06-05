import { model, Schema } from "mongoose"

const workOrderSchema = new Schema({
  workOrderNumber: { type: Number, required: true },
  customerName: { type: String, required: true },
  vehiclePlate: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  serviceDescription: { type: String, required: true },
  itemsPurchased: { type: [String], default: [] },
  status: { type: String, enum: ["open", "in_progress", "closed"], default: "open" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  costEstimate: { type: Number, required: true },
  mechanicName: { type: String, required: true },
},
  { timestamps: true }
)

export const WorkOrder = model("WorkOrder", workOrderSchema)