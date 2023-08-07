
//Parse dates when editing content
export const parseDates = (string: string): string[] => {
    const pattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const matches = string.match(pattern);
    return matches || [];
  }