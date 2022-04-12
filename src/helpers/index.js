export const getDay = (num) => {
  const obj = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
  }
  return obj[num]
}

export const imgRequest = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

export const getDataTemp = ({data}) => {
  const temp = data['daily'].map(el => {
    return {
      day: new Date(el.dt * 1000).getDay(),
      temp: Math.round(el.temp.max),
      icon: el.weather[0].icon,
    }
  });
  return temp
}

export const conversionToFahrenheit = (temp) => {
  return temp + 34
}