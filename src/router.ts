import { Router, Request, Response } from 'express'
import { createWorkOrder } from './controllers/workOrdersControllers'

import { validate } from './middleware/handleValidation'

const router = Router()

export default router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API funcionando!")
}).post("/workorders", validate, createWorkOrder)