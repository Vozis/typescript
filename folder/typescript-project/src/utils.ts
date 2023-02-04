export function getDataFromLocalStorage<K>(key: string): K | null {
  try {
    return JSON.parse(localStorage.getItem(`${key}`) || '');
  } catch (error) {
    return null;
  }
}
