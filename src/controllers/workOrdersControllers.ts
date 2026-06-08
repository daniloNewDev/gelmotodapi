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

export async function findWorkOrderByNumber(req: Request, res: Response) {

  try {

    const { workOrderNumber } = req.params
    const workOrder = await WorkOrder.findOne({ workOrderNumber: Number(workOrderNumber) })

    if (!workOrder) {
      return res.status(404).json({ message: "Ordem de serviço não encontrada" })
    }
    return res.status(200).json(workOrder)

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }

}

export async function getWorkorderByClientName(req: Request, res: Response) {

  try {

    const { customerName } = req.params
    const workOrders = await WorkOrder.find({ customerName: customerName })

    if (workOrders.length === 0) {
      return res.status(404).json({ message: "Nenhuma ordem de serviço encontrada para este cliente" })
    }

    return res.status(200).json(workOrders)

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }

}

export async function updateWorkOrder(req: Request, res: Response) {

  try {

    const { workOrderNumber } = req.params
    const data = req.body
    const workOrder = await WorkOrder.findOne({ workOrderNumber: Number(workOrderNumber) })

    if (!workOrder) {
      return res.status(404).json({ message: "Ordem de serviço não encontrada" })
    }

    await WorkOrder.updateOne({ workOrderNumber: Number(workOrderNumber) }, data)
    return res.status(200).json(data)

  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }

}