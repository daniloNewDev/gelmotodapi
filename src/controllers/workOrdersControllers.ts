import { Request, Response } from "express"

import { WorkOrder } from "../models/workOrders"

import Logger from "../../config/logger"

export async function createWorkOrder(req: Request, res: Response) {
  try {
    const data = req.body
    const workOrder = await WorkOrder.create(data)
    return res.status(201).json(workOrder)

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }
}