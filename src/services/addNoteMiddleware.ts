import { Request, Response, NextFunction } from 'express';
import {addNote } from '../repositories/dataHandler'



const addNoteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, category, content } = req.body;        
        const data = req.app.locals.notes
        const newData= addNote(data, { "name": name, "content": content, "category": category, "status": "live" })
        req.app.locals.notes = newData     
    next()
  } catch (err) {
    res.status(500).json({ type: err.name, message: err.message })
  }
};

export default addNoteMiddleware;