// Convert a string into a helthy slug for urls
export const slugify = (text: string) => {
  return text
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w]+/g, '-')
    .replace(/-+$/g, '')
    .toLowerCase()
}
