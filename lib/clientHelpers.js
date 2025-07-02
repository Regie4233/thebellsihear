export const formatDate = (dateObject) => {
    dateObject = new Date(dateObject);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    // const paddedMonth = String(month).padStart(2, '0');
    const paddedDay = String(day).padStart(2, '0');

    const twoDigitYear = String(year).slice(-2);

    // Combine the parts with hyphens
    return `${monthNames[month]}-${paddedDay}-${twoDigitYear}`;
}

export const formatDurationRefined = (totalMinutes) => {
 // Input validation: Ensure it's a non-negative integer
 if (typeof totalMinutes !== 'number' || totalMinutes < 0 || !Number.isInteger(totalMinutes)) {
    console.error("Invalid input: Please provide a non-negative integer for minutes.");
    return ""; // Or return null, or throw an error depending on desired handling
  }

  // Calculate whole hours
  const hours = Math.floor(totalMinutes / 60);

  // Calculate remaining minutes
  const minutes = totalMinutes % 60;

  // Build the output string
  let result = "";

  if (hours > 0) {
    // Only include hours if there's at least one full hour
    result += `${hours} hr`;
    // Add a space only if we also have minutes to show after hours
    if (minutes > 0) {
       result += " ";
    }
  }

  // Always include minutes part (even if 0 when hours are present)
  // Or only if minutes > 0 OR if hours === 0 (to show "0 mins" for input 0)
  if (minutes > 0 || hours === 0) {
     result += `${minutes} mins`;
  }

  // Handle the specific case of exactly 0 minutes input resulting in "0 mins"
  // The above logic already handles this because hours === 0 and minutes === 0,
  // the second condition `minutes > 0 || hours === 0` becomes `0 > 0 || 0 === 0` which is true.

  return result;
  }


  export const formatDateToMMDDYY = (dateObject = new Date()) => {
    dateObject = new Date(dateObject);
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = dateObject.getMonth();
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    // const paddedMonth = String(month).padStart(2, '0');
    const paddedDay = String(day).padStart(2, '0');

    const twoDigitYear = String(year).slice(-2);

    // Combine the parts with hyphens
    return `${monthNames[month]}-${paddedDay}-${twoDigitYear}`;
}