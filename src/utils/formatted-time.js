export const formattedTime = (time) => {
  const date = new Date(time);
  const hours = date?.getHours();
  const minutes = date?.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  function padZero(value) {
    return value?.toString().padStart(2, "0");
  }

  function convertTo12Hour(hours) {
    return hours % 12 || 12;
  }

  return `${padZero(convertTo12Hour(hours))}:${padZero(minutes)} ${amOrPm}`;
};
