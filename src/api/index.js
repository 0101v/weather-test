import moment from 'moment'

export const getFullDate = () => {
  return {
    time: moment().format('h:mm'),
    amPm: moment().format('a'),
    today: moment().format('dddd'),
    day: moment().format('LL') 
  }
}