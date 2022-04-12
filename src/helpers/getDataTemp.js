

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