import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors: Object[] = []

  for (const err of errors.array()) {
    if (typeof err === "object" && "path" in err && "msg" in err) {
      const param = err.path as string;
      const msg = err.msg as string;
      extractedErrors.push({ [param]: msg });
    }
  }

  return res.status(422).json({
    errors: extractedErrors
  })

}