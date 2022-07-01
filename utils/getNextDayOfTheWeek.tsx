export function getNextDayOfTheWeek(dayName: string, excludeToday = true, refDate = new Date()) {
  const dayOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].indexOf(dayName);
  refDate.setHours(0, 0, 0, 0);
  refDate.setDate(
    refDate.getDate() + +!!excludeToday + ((dayOfWeek + 7 - refDate.getDay() - +!!excludeToday) % 7)
  );
  return refDate;
}
