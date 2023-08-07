import { Request, Response, NextFunction } from 'express';
import { NoteEditSchema, ParamsSchema,NoteAddSchema } from './schemas/validateSchema';

const yupValidate = (schema: typeof NoteEditSchema | typeof ParamsSchema | typeof NoteAddSchema ) => async (req: Request, res:Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body,      
      params: req.params,
    });
    console.log("Schema validated")
    return next();
  } catch (err) {
    return res.status(500).json({ type: err.name, message: err.message });
  }
};

export default yupValidate