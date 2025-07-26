const getCurrentDate = (currentDate): string => {
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // January is 0
  const year = currentDate.getFullYear();

  // Format day and month with leading zero if needed
  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  const fullDate = `${year}-${formattedMonth}-${formattedDay}`;
  return fullDate;
};

export { getCurrentDate };
