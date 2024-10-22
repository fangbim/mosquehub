// utils/slugify.ts
export const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");