const getCurrentTime = (currentTime): string => {
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;

  const time = `${formattedHours}-${formattedMinutes}`;
  return time;
};

export { getCurrentTime };
