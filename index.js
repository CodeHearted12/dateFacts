let moment = require('moment');
const log = console.log;
const chalk = require('chalk');
let day = moment().isDAY();
if (day === true){
  day = 'is';
} else {
  day = "is not";
}


let lyear = moment().isLeapYear();
if (lyear === true){
  lyear = " is ";
} else {
  lyear = " is not ";
}

let dayStart = moment().startOf('time of day')
let result = moment().diff(moment(dayStart));

let one = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
let two = moment().format('DDDo')
let three = moment.duration(result).as('seconds');
let four = day;
let five = lyear;


log("It is " + chalk.blue(`${firstLine}`) + ".")

log("It is the " + chalk.magenta(`${secondLine}`) + " day of the year.")
log("It is " + chalk.yellow(`${thirdLine}`) + " seconds into the day.")
log("It " + chalk.green(`${fourthLine}`) + " currently Daylight Savings.")
log("It " + chalk.red(`${fifthLine}`) + " a leap year.")
