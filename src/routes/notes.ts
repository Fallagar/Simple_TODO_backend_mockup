import { Router, Request, Response } from 'express';
import { findNoteById, getStats} from '../repositories/dataHandler';
import deleteNoteMiddleware from '../services/deleteNoteMiddleware';
import updateNoteMiddleware from '../services/updateNoteMiddleware';
import { ParamsSchema, NoteEditSchema, NoteAddSchema } from '../services/schemas/validateSchema';
import yupValidate from '../services/yupValidateMiddleware';
import addNoteMiddleware from '../services/addNoteMiddleware';

export const noteRoute = Router();

// GET STATS
noteRoute.get('/notes/stats', async (req: Request, res: Response) => {
  try {
    const summary = getStats(req.app.locals.notes)
    res.status(200).json(summary);
  } catch (error) {
    res.status(404).json(error.message)
  }
  
});

// GET NOTE BY ID
noteRoute.get('/notes/:id', async (req: Request, res: Response) => {
  try {
    const data = req.app.locals.notes
    const param = req.params.id
    const note = findNoteById(data, param)
    if (note === -1) {
      throw new Error("Note not found!")
    }
    res.status(200).json(data[note]);
  } catch (err) {
    res.status(404).json({ type: err.name, message: err.message })
  }
  
});

//DELETE NOTE BY ID
noteRoute.delete('/notes/:id', deleteNoteMiddleware, async (req: Request, res: Response) => {      
  res.json(req.app.locals.notes);
});

//UPDATE NOTE BY ID
noteRoute.patch('/notes/:id', yupValidate(ParamsSchema), yupValidate(NoteEditSchema), updateNoteMiddleware, async (req: Request, res: Response) => {      
   res.json(req.app.locals.notes);
});

//GET ALL NOTES
noteRoute.get('/notes', (req, res) => {    
  res.json(req.app.locals.notes);
});

//ADD NEW NOTE
noteRoute.post('/notes', yupValidate(NoteAddSchema), addNoteMiddleware, async (req: Request, res: Response) => {    
  res.json(req.app.locals.notes);
});
