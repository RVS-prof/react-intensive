export const filterByField = <T, K extends keyof T>(
  items: T[],
  field: K,
  value: T[K]
): T[] => {
  return items.filter(item => item[field] === value);
};