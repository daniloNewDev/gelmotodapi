import { model, Schema } from "mongoose"

const workOrderSchema = new Schema({
  workOrderNumber: { type: Number },
  customerName: { type: String },
  vehiclePlate: { type: String },
  vehicleModel: { type: String },
  serviceDescription: { type: String },
  itemsPurchased: { type: [String], default: [] },
  status: { type: String, enum: ["open", "in_progress", "closed"], default: "open" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  costEstimate: { type: Number },
  mechanicName: { type: String },
},
  { timestamps: true }
)

export const WorkOrder = model("WorkOrder", workOrderSchema)