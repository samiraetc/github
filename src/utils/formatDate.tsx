export const formatDateByMonthYear = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat(['en-US'], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
  return formatter;
};
