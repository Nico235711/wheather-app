
export const formattedTemperature = (temperature) => {
  const kelvin = 273.15
  return parseInt(temperature - kelvin)
}
