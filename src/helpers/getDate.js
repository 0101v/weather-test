import moment from 'moment-timezone';

export const getFullDate = (timeZone) => {
  if (!timeZone) return {
    time: moment().format('h:mm'),
    amPm: moment().format('a'),
    today: moment().format('dddd'),
    day: moment().format('LL') 
  };
  return {
    time: moment().tz(timeZone).format('h:mm'),
    amPm: moment().tz(timeZone).format('a'),
    today: moment().tz(timeZone).format('dddd'),
    day: moment().tz(timeZone).format('LL') 
  }
}