import { object, string, mixed } from 'yup';

enum Category{
    Idea = "Idea",
    Thought = "Random Thought",
    Task = "Task"
}
enum Status{
    Live = "live",
    Archive = "archive"
}

// YUP SCHEMA FOR EDITING
export const NoteEditSchema = object({
    body: object({
        name: string(),
    category: mixed<Category>().oneOf(Object.values(Category)),
    content : string(),
    status: mixed<Status>().oneOf(Object.values(Status)),
    })
})

// YUP SCHEMA FOR PARAMS
export const ParamsSchema = object({    
    params: object({
        id: string().required()
    })
})

// YUP SCHEMA FOR ADDING NOTES
export const NoteAddSchema = object({
    body: object({
        name: string().min(1).required(),
    category: mixed<Category>().oneOf(Object.values(Category)).required(),
    content : string().min(1).required()
    })    
})