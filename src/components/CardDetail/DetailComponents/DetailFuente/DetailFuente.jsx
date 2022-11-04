import React from 'react'

export default function DetailFuente({details}) {
    const {Watts, Format, Color, Dimensions} = details
  return (
    <>
        <span>
        <b>Dimensiones: </b>
        {Watts}
      </span>
      <span>
        <b>Formato: </b>
        {Format}
      </span>
      <span>
        <b>Color: </b>
        {Color}
      </span>
      <span>
        <b>Operating Temperature: </b>
        {details["Operating Temperature"]}
      </span>
      <span>
        <b>Dimensiones: </b>
        {Dimensions}
      </span>
      <span>
        <b>Input Voltaje: </b>
        {details["Input Voltage"]}
      </span>
      <span>
        <b>Cooling systems: </b>
        {details["Cooling system"]}
      </span>
      <span>
        <b>RGB Fan: </b>
        {details["RGB Fan"]}
      </span>
    </>
  )
}
