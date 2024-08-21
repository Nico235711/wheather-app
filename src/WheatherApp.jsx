import { useState } from "react"
import { ErrorMessage } from "./components/ErrorMessage"
import { WheatherDetails } from "./components/WheAtherDetails"

export const WheatherApp = () => {
  const [city, setCity] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [dataWheather, setDataWheather] = useState(null)

  const handleSearchWhether = (event) => {
    event.preventDefault()
    if (city === "") {
      setErrorMessage("El campo no puede ir vacío")
      return
    }
    setErrorMessage("")
    fetchWhether()
  }

  const handleChangeCity = (event) => {
    setCity(event.target.value)
  }

  const fetchWhether = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_URL_BASE}?q=${city}&appid=${import.meta.env.VITE_API_KEY}`)
      const result = await response.json()
      setDataWheather(result)

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="container">
      <h1>Aplicación del clima</h1>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <form onSubmit={handleSearchWhether}>
        <input
          type="text"
          value={city}
          onChange={handleChangeCity}
        />
        <button type="submit">Buscar Clima</button>

      </form>
      
      {
        dataWheather?.name && <WheatherDetails dataWheather={dataWheather} />
      }
    </div>
  )
}
