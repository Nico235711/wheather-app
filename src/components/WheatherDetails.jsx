import { formattedTemperature } from "../utils/formattedTemperature"

export const WheatherDetails = ({ dataWheather }) => {

  const { temp, temp_min, temp_max } = dataWheather.main

  return (
    <div>
      <h2>{dataWheather.name}</h2>
      <p>Temperatura: <span>{formattedTemperature(temp)}<span className="degree-celsius">&#8451;</span></span></p>
      <p>Max: <span>{formattedTemperature(temp_max)}<span className="degree-celsius">&#8451;</span></span></p>
      <p>Min: <span>{formattedTemperature(temp_min)}<span className="degree-celsius">&#8451;</span></span></p>
    </div>
  )
}
