import { Request, Response, NextFunction } from 'express';
import { deleteNoteById, findNoteById } from '../repositories/dataHandler';

const deleteNoteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {    
    const data = req.app.locals.notes
    const id = req.params.id
    const note = findNoteById(data, id)
    if (!note) {
      throw new Error("Note not found!")
    } else {
      req.app.locals.notes = deleteNoteById(data, note)
    }
    next()
  } catch (err) {
    res.status(500).json({ type: err.name, message: err.message })
  }
};

export default deleteNoteMiddleware;