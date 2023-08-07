import { Request, Response, NextFunction } from 'express';
import { findNoteById, updateNoteById } from '../repositories/dataHandler'



const updateNoteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, category, content, status } = req.body;
        const id = req.params.id;
        const data = req.app.locals.notes
        const noteIndex = findNoteById(data, id)
        if (noteIndex !== -1) {
            const newData = updateNoteById(data, noteIndex, { "name": name, "content": content, "category": category, "status" : status })
            req.app.locals.notes = newData
        } else {
          throw new Error("Note not found!")
        }      
    next()
  } catch (err) {
    res.status(500).json({ type: err.name, message: err.message })
  }
};

export default updateNoteMiddleware;