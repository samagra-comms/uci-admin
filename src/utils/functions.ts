export function formatDate(input) {
  const [seconds, minutes, hours, day, month, year] = input
    .split("_")
    .map(Number);

  const months = [
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

  const formattedDate = new Date(year, month - 1, day, hours, minutes, seconds);

  const dayNumber = formattedDate.getDate();
  const monthName = months[formattedDate.getMonth()];
  const yearNumber = formattedDate.getFullYear();
  const hoursString = formattedDate.getHours().toString().padStart(2, "0");
  const minutesString = formattedDate.getMinutes().toString().padStart(2, "0");
  const secondsString = formattedDate.getSeconds().toString().padStart(2, "0");

  const ordinalDay =
    dayNumber +
    (dayNumber === 1 || dayNumber === 21 || dayNumber === 31
      ? "st"
      : dayNumber === 2 || dayNumber === 22
      ? "nd"
      : dayNumber === 3 || dayNumber === 23
      ? "rd"
      : "th");

  return `${ordinalDay} ${monthName}, ${yearNumber} ${hoursString}:${minutesString}:${secondsString}`;
}

export function convertToShortDate(input) {
  var cleanedDate = input.replace(/(\d+)(st|nd|rd|th)/, "$1");

  var dateObject = new Date(cleanedDate);

  var day = String(dateObject.getDate()).padStart(2, "0");
  var month = String(dateObject.getMonth() + 1).padStart(2, "0");
  var year = dateObject.getFullYear();
  var convertedFormat = day + "_" + month + "_" + year;

  return convertedFormat;
}

export function reverseFormatDate(formattedDate) {
  const parts = formattedDate.match(/(\d+)(?:st|nd|rd|th)\s+(\w+),\s+(\d+)\s+(\d+:\d+:\d+)/);

  if (!parts) {
    return "Invalid date format";
  }

  const dayNumber = parts[1].padStart(2, "0");
  const monthName = parts[2];
  const yearNumber = parts[3];
  const time = parts[4];

  const months = [
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

  const month = (months.indexOf(monthName) + 1).toString().padStart(2, "0");

  const [hours, minutes, seconds] = time.split(":").map(Number);

  const reversedFormat = `${seconds.toString().padStart(2, "0")}_${minutes.toString().padStart(2, "0")}_${hours.toString().padStart(2, "0")}_${dayNumber}_${month}_${yearNumber}`;

  return reversedFormat;
}

export const formatNumberWithCommas = (number) => {
  return number.toLocaleString("en-US");
};