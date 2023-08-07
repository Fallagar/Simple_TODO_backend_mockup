import { parseDates } from "../helpers/parseDates"
import { Summary, Note } from "./models/data"
import { v4 as uuidv4 } from "uuid";

interface IValues {
    name: string | undefined,
    category: string | undefined,
  content: string | undefined,
  status: string | undefined,
}

//Finding index by id of note
export function findNoteById(data: Note[], id: string): number {
    const result = data.findIndex((entry) => entry.id === id)
    return result
}

//Deleete note by filtering data
export const deleteNoteById =(data: Note[],targetIndex: number): Note[] => {
    const result: Note[]  = data.filter((_, index) => index !== targetIndex)
    return result
}


//Updating note by id
export const updateNoteById = (data: Note[], targetIndex: number, values: IValues): Note[] => {
    if (values.name) {
        data[targetIndex].name = values.name
    } 
    if (values.category) {
        data[targetIndex].category = values.category
    }
    if (values.content) {
        data[targetIndex].content = values.content
        data[targetIndex].dates = parseDates(values.content)
    }
    if (values.status) {
        data[targetIndex].status = values.status        
    }
    return data;
}

//Getting stats of data
export const getStats = (data: Note[]) => {
    const SummaryResult = new Summary();
data.forEach((item) => {
    if (item.category === "Idea") {
      if (item.status === "live") {
        SummaryResult.setIdeaLive();
      } else {
        SummaryResult.setIdea();
      }
    } else if (item.category === "Thought") {
      if (item.status === "live") {
        SummaryResult.setThoughtLive();
      } else {
        SummaryResult.setThought();
      }
    } else if (item.category === "Task") {
      if (item.status === "live") {
        SummaryResult.setTaskLive();
      } else {
        SummaryResult.setTask();
      }
    }
});
    
    return SummaryResult.getSummary();
}

//Adding new note to data array
export const addNote = (data: Note[], values: IValues) => {
  const note = new Note(values.name, values.category, values.content, values.status, false, uuidv4());
  const newData = [...data, note];
  return newData;
}