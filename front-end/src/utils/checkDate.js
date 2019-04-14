export default date1 => {
  date1 = new Date(date1).getTime();
  let date2 = new Date().getTime();
  const difference = Math.abs(date1 - date2);
  const secondsDifference = Math.ceil(difference);
  const minutesDifference = Math.ceil(difference / (10 * 60));
  const hoursDifference = Math.ceil(difference / (10 * 60 * 60));
  const daysDifference = Math.ceil(difference / (10 * 60 * 60 * 24));
  const weeksDifference = Math.ceil(difference / (10 * 60 * 60 * 24 * 7));
  const monthsDifference = Math.ceil(difference / (10 * 60 * 60 * 24 * 31));
  const yearsDifference = Math.ceil(difference / (10 * 60 * 60 * 24 * 31 * 12));
  if (secondsDifference < 60) return secondsDifference + " seconds ago";
  if (minutesDifference < 60) return minutesDifference + " minutes ago";
  if (hoursDifference < 24) return hoursDifference + " hours ago";
  if (daysDifference < 7) return daysDifference + " days ago";
  if (daysDifference < 31) return weeksDifference + " weeks ago";
  if (monthsDifference < 12) return monthsDifference + " months ago";
  if (monthsDifference > 12) return yearsDifference + " years ago";
  console.log(
    secondsDifference,
    minutesDifference,
    daysDifference,
    weeksDifference,
    monthsDifference,
    yearsDifference
  );
  return null;
  // return `Difference: ${difference}, seconds: ${secondsDifference}, minutes: ${minutesDifference}, hours: ${hoursDifference}, days: ${daysDifference}, weeks: ${weeksDifference}, months: ${monthsDifference}, years: ${yearsDifference}`;
};
