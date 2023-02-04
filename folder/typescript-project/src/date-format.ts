export function addMonths(date: Date, months: number): Date {
  const dateCopy = new Date(date);
  dateCopy.setMonth(dateCopy.getMonth() + months);

  return dateCopy;
}

export function addDays(date: Date, days: number): Date {
  const dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() + days);

  return dateCopy;
}

export function formatDate(date: Date) {
  return date.toISOString().split('T')[0];
}

export function dateToUnixStamp(date: Date) {
  return date.getTime() / 1000;
}
