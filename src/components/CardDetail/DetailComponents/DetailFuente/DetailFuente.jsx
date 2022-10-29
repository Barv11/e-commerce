import React from 'react'

export default function DetailFuente({details}) {
    const {Watts, format, color} = details
  return (
    <>
        <span>
        <b>Dimensiones: </b>
        {Watts}
      </span>
      <span>
        <b>Dimensiones: </b>
        {format}
      </span>
      <span>
        <b>Dimensiones: </b>
        {color}
      </span>
      <span>
        <b>Dimensiones: </b>
        {details["operating temperature"]}
      </span>
      <span>
        <b>Dimensiones: </b>
        {details["input voltage"]}
      </span>
      <span>
        <b>Dimensiones: </b>
        {details["cooling systems"]}
      </span>
    </>
  )
}
