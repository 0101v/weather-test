import { getFullDate } from './getDate'

export const getBackgroundImage = (outside, timeZone) => {
  const time = getFullDate(timeZone).fullFormat.match(/[0-9]+:/)[0].slice(0, 2)
  if ((+time === 23) || (6 > time)) return '/night/1025.jpg';

  switch (outside) {
    case '01d':
      return '/images/clearSky.jpg';
    case '02d':
    case '03d':
    case '04d':
      return '/images/clouds.jpg';
    case '09d':
    case '10d':
      return '/images/rain.jpg';
    case '11d':
      return '/images/storm.jpg';
    case '13d':
      return '/images/snow.jpg';
    case '50d':
      return '/images/fog.jpg';
      
    default:
      return '/images/1025.jpg'
  }
}