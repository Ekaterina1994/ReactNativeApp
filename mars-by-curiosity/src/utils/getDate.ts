const currentDate = new Date();
const currentYear = "" + currentDate.getFullYear();
let currentMonth = "" + (currentDate.getMonth() + 1);
let currentDay = "" + currentDate.getDate();

switch (currentMonth) {
  case "1":
    currentMonth = "Jan";
    break;
  case "2":
    currentMonth = "Feb";
    break;
  case "3":
    currentMonth = "Mar";
    break;
  case "4":
    currentMonth = "Apr";
    break;
  case "5":
    currentMonth = "May";
    break;
  case "6":
    currentMonth = "Jun";
    break;
  case "7":
    currentMonth = "Jul";
    break;
  case "8":
    currentMonth = "Aug";
    break;
  case "9":
    currentMonth = "Sep";
    break;
  case "10":
    currentMonth = "Oct";
    break;
  case "11":
    currentMonth = "Nov";
    break;
  case "12":
    currentMonth = "Dec";
    break;
}
if (currentMonth.length < 2) {
  currentMonth = `0${currentMonth}`;
}

if (currentDay.length < 2) {
  currentDay = `0${currentDay}`;
}

/**
 * Return current date yyyy-mm-dd
 */
export const getCurrentDate = `${currentDay} ${currentMonth}, ${currentYear}`;
