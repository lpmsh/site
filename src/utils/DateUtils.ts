var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonthName(monthNumber: number) {
  return month[monthNumber - 1];
}

export function getHumanDateFromSlashDate(date: string | Date) {
  const goodDate = new Date(date);

  return `${getMonthName(goodDate.getMonth())} ${goodDate.getDate()}, ${goodDate.getFullYear()}`;
}
