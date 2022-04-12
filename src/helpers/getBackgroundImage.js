import { getFullDate } from './getDate'
import night from '../assets/night.jpg'
import imageDefault from '../assets/1025.jpg'
import clearSky from '../assets/clearSky.jpg'
import clouds from '../assets/clouds.jpg'
import rain from '../assets/rain.jpg'
import storm from '../assets/storm.jpg'
import snow from '../assets/snow.jpg'
import fog from '../assets/fog.jpg'

export const getBackgroundImage = (outside, timeZone) => {
  const time = getFullDate(timeZone).fullFormat.match(/[0-9]+:/)[0].slice(0, 2)
  if ((time == 23) || (6 > time)) return night;

  switch (outside) {
    case '01d':
      return clearSky;
    case '02d':
    case '03d':
    case '04d':
      return clouds;
    case '09d':
    case '10d':
      return rain;
    case '11d':
      return storm;
    case '13d':
      return snow;
    case '50d':
      return fog;
    default:
      return imageDefault
  }
}