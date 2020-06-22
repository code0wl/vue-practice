export const safeIncludesLowerCase = (a: string[], b: string) =>
  a.find(word => word.toLowerCase().includes(b.toLowerCase()));
