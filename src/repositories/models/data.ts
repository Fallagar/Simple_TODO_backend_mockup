export interface INote {
     name: string;
  category: string;
  content: string;
  status: string;
  id:string;
  dates: string[];
  created: string;
}

export class Note {
  name: string;
  category: string;
  content: string;
  status: string;
  id:string;
  dates: string[];
  created: string | Boolean;

  constructor(
    name: string,
    category: string,
    content: string,
    status: string,
    created: string | Boolean,
    id: string,
  ) {
    this.name = name;
    this.category = category;
    this.content = content;
    this.status = status;
    this.id = id;
    this.dates = this.getDates(content);
    this.created =
      created ||
      new Date().toLocaleDateString('en-GB', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
  }

  private getDates(string: string): string[] {
    const pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const matches = string.match(pattern);
    return matches || [];
  }

  setDates(string: string): void {
    this.dates = this.getDates(string);
  } 
}
export class Summary {
  idea: number;
  ideaLive: number;
  thought: number;
  thoughtLive: number;
  task: number;
  taskLive: number;

  constructor() {
    this.idea = 0;
    this.ideaLive = 0;
    this.thought = 0;
    this.thoughtLive = 0;
    this.task = 0;
    this.taskLive = 0;
  }

  setIdea(): void {
    this.idea++;
  }

  setIdeaLive(): void {
    this.idea++;
    this.ideaLive++;
  }

  setThought(): void {
    this.thought++;
  }

  setThoughtLive(): void {
    this.thought++;
    this.thoughtLive++;
  }

  setTask(): void {
    this.task++;
  }

  setTaskLive(): void {
    this.task++;
    this.taskLive++;
  }

  getSummary(): Array<{
    category: string;
    live: number;
    archived: number;
  }> {
    const result = [
      {
        category: "Idea",
        live: this.ideaLive,
        archived: this.idea - this.ideaLive,
      },
      {
        category: "Task",
        live: this.taskLive,
        archived: this.task - this.taskLive,
      },
      {
        category: "Random Thought",
        live: this.thoughtLive,
        archived: this.thought - this.thoughtLive,
      },
    ];
    return result;
  }
}





