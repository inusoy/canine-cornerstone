export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  // Format: DD.MM.YYYY
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
}

export function formatEventDateRange(event: {
  date?: string;
  dateStart?: string;
  dateEnd?: string;
  timeStart?: string;
  timeEnd?: string;
}): string {
  // Jeśli jest tylko jedna data
  if (event.date && !event.dateStart && !event.dateEnd) {
    return formatDate(event.date);
  }
  // Jeśli jest przedział dat
  if (event.dateStart && event.dateEnd) {
    const dateRange = `${formatDate(event.dateStart)}–${formatDate(event.dateEnd)}`;
    if (event.timeStart && event.timeEnd) {
      return `${dateRange}, ${event.timeStart}–${event.timeEnd}`;
    }
    if (event.timeStart) {
      return `${dateRange}, od ${event.timeStart}`;
    }
    return dateRange;
  }
  // Jeśli jest tylko data początkowa
  if (event.dateStart) {
    let result = formatDate(event.dateStart);
    if (event.timeStart && event.timeEnd) {
      result += `, ${event.timeStart}–${event.timeEnd}`;
    } else if (event.timeStart) {
      result += `, od ${event.timeStart}`;
    }
    return result;
  }
  // Jeśli jest tylko godzina
  if (event.timeStart && event.timeEnd) {
    return `${event.timeStart}–${event.timeEnd}`;
  }
  if (event.timeStart) {
    return `od ${event.timeStart}`;
  }
  return '';
}
