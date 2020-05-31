import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Api from "../../services/api"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const initialValues = {
  temp: "",
  temp_min: "",
  temp_max: "",
  city: "",
  condition_code: "",
  description: "",
}

const Weather = () => {
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    Api.index("Teresina", "PI")
      .then((response) => {
        console.log(response.data);
        
        setValues({
          temp: response.data.results.temp,
          temp_min: response.data.results.forecast[0].min,
          temp_max: response.data.results.forecast[0].max,
          city: response.data.results.city,
          condition_code: response.data.results.condition_code,
          description: response.data.results.description,
        })
      })
  }, []);

  return (
    <div className="card">
      <h1>{values.city}</h1>
      <FontAwesomeIcon icon={faCoffee} />
      <h1 className="temp">{values.temp}&deg;</h1>
      <h3 className="min-max">
        <span>{values.temp_min}&deg;</span>
        <span>{values.temp_max}&deg;</span>
      </h3>
      <h4 className="description">{values.description}</h4>
    </div>
  )
}

export default Weather
