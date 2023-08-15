/**
 * Return the selected date in format "dd Mon, yyyy"
 */
export const getDate = (date: Date) => {
  const year = "" + date.getFullYear();
  const day = "" + date.getDate();
  let month = "" + (date.getMonth() + 1);

  switch (month) {
    case "1":
      month = "Jan";
      break;
    case "2":
      month = "Feb";
      break;
    case "3":
      month = "Mar";
      break;
    case "4":
      month = "Apr";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "Jun";
      break;
    case "7":
      month = "Jul";
      break;
    case "8":
      month = "Aug";
      break;
    case "9":
      month = "Sep";
      break;
    case "10":
      month = "Oct";
      break;
    case "11":
      month = "Nov";
      break;
    case "12":
      month = "Dec";
      break;
  }

  return `${day} ${month}, ${year}`;
};

/**
 * Return current date in format "dd Mon, yyyy"
 */
export const currentDate = getDate(new Date());