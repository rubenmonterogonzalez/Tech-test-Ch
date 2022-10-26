/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
  let initial = dates[0].toString().split(".");
  let final = [initial[1], initial[0], initial[2]].join(".");
  let date1 = new Date(final);

  let initial2 = dates[1].toString().split(".");
  let final2 = [initial2[1], initial2[0], initial2[2]].join(".");
  let date2 = new Date(final2);

  function calcDate(date1, date2) {
    let differenceInTime = Math.floor(date2.getTime() - date1.getTime());

    const fromMsToDay = 1000 * 60 * 60 * 24;

    const days = Math.round(differenceInTime / fromMsToDay);
    const months = Math.round(days / 30.4375);
    const years = Math.floor(months / 12);
    const actualMonths = Math.ceil(months - years * 12);

    const leapYear = days + 1;

    if (years < 1 && actualMonths < 2 && days < 31) {
      return `total ${days} days`;
    } else if (years < 1 && actualMonths < 2 && days > 30) {
      return `${actualMonths} month, total ${days} days`;
    } else if (years < 1 && actualMonths > 2) {
      return `${actualMonths} months, total ${days} days`;
    } else if (years < 2 && actualMonths < 1) {
      return `${years} year, total ${days} days`;
    } else if (years < 2 && actualMonths < 2) {
      return `${years} year, ${actualMonths} month, total ${days} days`;
    } else if (years < 2 && actualMonths > 2) {
      return `${years} year, ${actualMonths} months, total ${days} days`;
    } else if (years > 2 && actualMonths < 1) {
      return `${years} years, total ${days} days`;
    } else if (years > 2 && actualMonths < 2) {
      return `${years} years, ${actualMonths} month, total ${days} days`;
    } else {
      return `${years} years, ${actualMonths} months, total ${days} days`;
    }
  }

  console.log(calcDate(date1, date2));

  return calcDate(date1, date2);
}


