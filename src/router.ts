import { Router, Request, Response } from 'express'
import { createWorkOrder } from './controllers/workOrdersControllers'

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API funcionando!")
}).post("/workorders", createWorkOrder)