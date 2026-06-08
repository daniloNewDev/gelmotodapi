import { Router, Request, Response } from 'express'
import { createWorkOrder, findWorkOrderByNumber, getWorkorderByClientName, updateWorkOrder } from './controllers/workOrdersControllers'

import { validate } from './middleware/handleValidation'
import { workOrderCreateValidation } from './middleware/workOrderValidation'

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API funcionando!")
}).post("/workorders", workOrderCreateValidation(), validate, createWorkOrder)
  .get("/workorders/:workOrderNumber", findWorkOrderByNumber)
  .get("/workorders/client/:customerName", getWorkorderByClientName)
  .patch("/workorders/:workOrderNumber", workOrderCreateValidation(), validate, updateWorkOrder)