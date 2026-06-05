import { Request, Response } from "express"

import WorkOrder from "../models/WorkOrder"

import Logger from "../config/logger"

export async function createWorkOrder(req: Request, res: Response) {
  return res.status(200).send("Funcionou o controller")
}