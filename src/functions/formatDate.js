export default function formatDate(dateString) {
    const date = new Date(dateString);
  
    // Day with ordinal suffix
    const day = date.getDate();
    const ordinalSuffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    const dayWithSuffix = `${day}${ordinalSuffix}`;
  
    // Month names array
    const monthNames = [
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
    const month = monthNames[date.getMonth()];
  
    // Year
    const year = date.getFullYear();
  
    // Time: hh:mm AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format, making 0 = 12
  
    const time = `${hours}:${minutes} ${ampm}`;
  
    return `${month} ${dayWithSuffix}, ${year} at ${time}`;
  }